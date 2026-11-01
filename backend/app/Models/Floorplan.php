<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Floorplan extends Model
{
    use HasFactory;

    public const STATUSES = ['pending', 'approved', 'rejected'];

    protected $fillable = [
        'name',
        'email',
        'phone',
        'company',
        'referal_code',
        'boothno',
        'boothtitle',
        'boothsize',
        'boothammount',
        'paymenttype',
        'networktype',
        'file',
        'company_profile_name',
        'company_details',
        'company_url',
        'company_logo',
        'booth_design',
        'booth_design_image',
        'status',
        'approval_message',
        'approved_by',
    ];

    protected $casts = [
        'boothammount' => 'decimal:2',
    ];

    // Bookings that hold their booth (a rejected booking frees it again)
    public function scopeActive(Builder $query): Builder
    {
        return $query->where('status', '!=', 'rejected');
    }

    public function publicUrl(?string $path): ?string
    {
        return $path ? Storage::disk('public')->url($path) : null;
    }

    // Admin view: everything, with file URLs
    public function toAdminArray(): array
    {
        return $this->toArray() + [
            'company_logo_url' => $this->publicUrl($this->company_logo),
            'booth_design_image_url' => $this->publicUrl($this->booth_design_image),
            'has_payment_proof' => (bool) $this->file,
        ];
    }

    // Public floor plan: only which booths are taken; company details only after approval
    public function toPublicArray(): array
    {
        $approved = $this->status === 'approved';

        return [
            'boothno' => $this->boothno,
            'status' => $this->status,
            'approved' => $approved,
            'company_name' => $approved ? ($this->company_profile_name ?: $this->company) : null,
            'company_url' => $approved ? $this->company_url : null,
            'company_logo' => $approved ? $this->publicUrl($this->company_logo) : null,
        ];
    }
}
