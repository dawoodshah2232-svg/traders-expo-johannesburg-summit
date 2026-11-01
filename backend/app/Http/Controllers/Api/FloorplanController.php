<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Floorplan;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Validation\Rule;

class FloorplanController extends Controller
{
    // GET /api/floorplan — booths that are taken, for the public floor plan
    public function index(): JsonResponse
    {
        $booked = Floorplan::active()
            ->orderByRaw("status = 'approved' desc")
            ->latest()
            ->get()
            ->unique('boothno')
            ->values()
            ->map->toPublicArray();

        return response()->json(['data' => $booked]);
    }

    // POST /api/floorplan — reserve a booth with payment proof
    public function store(Request $request): JsonResponse
    {
        $booths = config('floorplan.booths');

        $data = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', 'not_regex:/[\r\n]/'],
            'phone' => ['required', 'string', 'max:30'],
            'company' => ['required', 'string', 'max:255'],
            'referal_code' => ['nullable', 'string', 'max:100'],
            'boothno' => ['required', 'integer', Rule::in(array_keys($booths))],
            'paymenttype' => ['required', Rule::in(config('floorplan.payment_types'))],
            'networktype' => ['nullable', 'string', 'max:50'],
            'file' => ['required', 'file', 'mimes:jpg,jpeg,png,pdf', 'max:10240'],
        ]);

        $boothNo = (string) $data['boothno'];
        $booth = $booths[$data['boothno']];

        // One booking per booth at a time; the lock stops two people taking it at the same moment
        return Cache::lock("floorplan-booth-{$boothNo}", 10)->block(5, function () use ($request, $data, $boothNo, $booth) {
            if (Floorplan::active()->where('boothno', $boothNo)->exists()) {
                return response()->json(['message' => 'Sorry, this booth has just been reserved. Please choose another booth.'], 409);
            }

            $floorplan = Floorplan::create([
                ...$data,
                'boothno' => $boothNo,
                'boothtitle' => $booth['label'],
                'boothsize' => $booth['size'],
                'boothammount' => $booth['price'],
                'file' => $request->file('file')->store('payment-proofs'),
                'status' => 'pending',
            ]);

            return response()->json([
                'message' => 'Booth reserved. We will verify your payment shortly.',
                'data' => ['id' => $floorplan->id, 'boothno' => $boothNo],
            ], 201);
        });
    }
}
