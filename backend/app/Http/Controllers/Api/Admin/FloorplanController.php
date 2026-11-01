<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Floorplan;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\StreamedResponse;

class FloorplanController extends Controller
{
    // GET /api/admin/floorplans?search=&status=&page=
    public function index(Request $request): JsonResponse
    {
        $query = Floorplan::query()->latest();

        if ($search = trim((string) $request->query('search'))) {
            $query->where(function ($q) use ($search) {
                foreach (['name', 'email', 'company', 'boothno', 'boothtitle'] as $column) {
                    $q->orWhere($column, 'like', "%{$search}%");
                }
            });
        }
        if (in_array($request->query('status'), Floorplan::STATUSES, true)) {
            $query->where('status', $request->query('status'));
        }

        $page = $query->paginate(20)->withQueryString();
        $page->getCollection()->transform(fn (Floorplan $f) => $f->toAdminArray());

        $counts = Floorplan::selectRaw('status, count(*) as total')->groupBy('status')->pluck('total', 'status');

        return response()->json($page->toArray() + [
            'stats' => [
                'total' => (int) $counts->sum(),
                'pending' => (int) ($counts['pending'] ?? 0),
                'approved' => (int) ($counts['approved'] ?? 0),
                'rejected' => (int) ($counts['rejected'] ?? 0),
            ],
        ]);
    }

    public function show(Floorplan $floorplan): JsonResponse
    {
        return response()->json(['data' => $floorplan->toAdminArray()]);
    }

    // POST /api/admin/floorplans/{id} (multipart, so files can be sent) — edit, approve or reject
    public function update(Request $request, Floorplan $floorplan): JsonResponse
    {
        $data = $request->validate([
            'name' => ['sometimes', 'required', 'string', 'max:255'],
            'email' => ['sometimes', 'required', 'email', 'max:255', 'not_regex:/[\r\n]/'],
            'phone' => ['sometimes', 'required', 'string', 'max:30'],
            'company' => ['sometimes', 'nullable', 'string', 'max:255'],
            'referal_code' => ['sometimes', 'nullable', 'string', 'max:100'],
            'boothammount' => ['sometimes', 'nullable', 'numeric', 'min:0'],
            'company_profile_name' => ['sometimes', 'nullable', 'string', 'max:255'],
            'company_details' => ['sometimes', 'nullable', 'string', 'max:5000'],
            'company_url' => ['sometimes', 'nullable', 'url', 'max:255'],
            'booth_design' => ['sometimes', 'nullable', 'string', 'max:255'],
            'status' => ['sometimes', 'required', Rule::in(Floorplan::STATUSES)],
            'approval_message' => ['sometimes', 'nullable', 'string', 'max:1000'],
            'company_logo' => ['nullable', 'image', 'mimes:jpg,jpeg,png,gif,webp', 'max:10240'],
            'booth_design_image' => ['nullable', 'file', 'mimes:jpg,jpeg,png,gif,webp,pdf', 'max:10240'],
        ]);

        // Approving a booking must not double-book a booth someone else already holds
        if (($data['status'] ?? null) === 'approved' && Floorplan::where('status', 'approved')
            ->where('boothno', $floorplan->boothno)->whereKeyNot($floorplan->id)->exists()) {
            return response()->json(['message' => "Booth {$floorplan->boothno} is already approved for another booking."], 409);
        }

        foreach (['company_logo', 'booth_design_image'] as $field) {
            if ($request->hasFile($field)) {
                if ($floorplan->{$field}) {
                    Storage::disk('public')->delete($floorplan->{$field});
                }
                $data[$field] = $request->file($field)->store('booths', 'public');
            }
        }

        if (isset($data['status']) && $data['status'] !== $floorplan->status) {
            $data['approved_by'] = $request->user()->name;
        }

        $floorplan->update($data);

        return response()->json(['message' => 'Booking updated.', 'data' => $floorplan->fresh()->toAdminArray()]);
    }

    public function destroy(Floorplan $floorplan): JsonResponse
    {
        if ($floorplan->file) {
            Storage::delete($floorplan->file);
        }
        Storage::disk('public')->delete(array_filter([$floorplan->company_logo, $floorplan->booth_design_image]));
        $floorplan->delete();

        return response()->json(null, 204);
    }

    // GET /api/admin/floorplans/{id}/proof — payment proof is private, so it is only served to admins
    public function proof(Floorplan $floorplan): StreamedResponse
    {
        abort_unless($floorplan->file && Storage::exists($floorplan->file), 404);

        return Storage::response($floorplan->file, "booth-{$floorplan->boothno}-payment." . pathinfo($floorplan->file, PATHINFO_EXTENSION));
    }
}
