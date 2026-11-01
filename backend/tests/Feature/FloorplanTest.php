<?php

namespace Tests\Feature;

use App\Models\Floorplan;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class FloorplanTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        Storage::fake('local');
        Storage::fake('public');
    }

    private function booking(array $overrides = []): array
    {
        return array_merge([
            'name' => 'Thandi Nkosi',
            'email' => 'thandi@example.com',
            'phone' => '+27 82 000 0000',
            'company' => 'Acme Markets',
            'boothno' => '5',
            'paymenttype' => 'bank',
            'file' => UploadedFile::fake()->image('proof.png'),
        ], $overrides);
    }

    private function admin(): User
    {
        return User::factory()->create(['is_admin' => true, 'name' => 'Kailash']);
    }

    public function test_booking_uses_server_side_booth_details_and_price(): void
    {
        $this->postJson('/api/floorplan', $this->booking(['boothammount' => 1, 'boothtitle' => 'Fake']))
            ->assertCreated();

        $booking = Floorplan::sole();
        $this->assertSame('Diamond Booth', $booking->boothtitle);
        $this->assertSame('4 x 3', $booking->boothsize);
        $this->assertSame('1750.00', $booking->boothammount);
        $this->assertSame('pending', $booking->status);
        Storage::disk('local')->assertExists($booking->file);
    }

    public function test_a_booth_cannot_be_booked_twice_until_rejected(): void
    {
        $this->postJson('/api/floorplan', $this->booking())->assertCreated();
        $this->postJson('/api/floorplan', $this->booking())->assertStatus(409);

        Floorplan::query()->update(['status' => 'rejected']);
        $this->postJson('/api/floorplan', $this->booking())->assertCreated();
    }

    public function test_booking_rejects_unknown_booths_and_header_injection(): void
    {
        $this->postJson('/api/floorplan', $this->booking(['boothno' => '99']))->assertJsonValidationErrors('boothno');
        $this->postJson('/api/floorplan', $this->booking(['email' => "a@b.co\r\nBcc: x@y.z"]))->assertJsonValidationErrors('email');
        $this->postJson('/api/floorplan', $this->booking(['file' => UploadedFile::fake()->create('x.exe', 10)]))->assertJsonValidationErrors('file');
    }

    public function test_public_list_hides_personal_data_and_unapproved_company(): void
    {
        Floorplan::create($this->booking(['boothno' => '5', 'file' => 'p.png', 'status' => 'pending', 'company_url' => 'https://acme.test']));
        Floorplan::create($this->booking(['boothno' => '6', 'file' => 'p.png', 'status' => 'approved', 'company_url' => 'https://acme.test']));
        Floorplan::create($this->booking(['boothno' => '7', 'file' => 'p.png', 'status' => 'rejected']));

        $res = $this->getJson('/api/floorplan')->assertOk();
        $data = collect($res->json('data'))->keyBy('boothno');

        $this->assertEqualsCanonicalizing(['5', '6'], $data->keys()->all());
        $this->assertNull($data['5']['company_name']);
        $this->assertNull($data['5']['company_url']);
        $this->assertSame('Acme Markets', $data['6']['company_name']);
        $this->assertStringNotContainsString('thandi', $res->getContent());
        $this->assertStringNotContainsString('+27', $res->getContent());
    }

    public function test_admin_routes_need_an_admin_token(): void
    {
        $this->getJson('/api/admin/floorplans')->assertUnauthorized();

        $user = User::factory()->create(['is_admin' => false]);
        $this->actingAs($user, 'sanctum')->getJson('/api/admin/floorplans')->assertForbidden();
    }

    public function test_admin_login_returns_a_token_that_works(): void
    {
        User::factory()->create(['email' => 'admin@example.com', 'password' => 'secret-pass-123', 'is_admin' => true]);

        $this->postJson('/api/admin/login', ['email' => 'admin@example.com', 'password' => 'wrong'])->assertStatus(422);
        $token = $this->postJson('/api/admin/login', ['email' => 'admin@example.com', 'password' => 'secret-pass-123'])
            ->assertOk()->json('token');

        $this->withToken($token)->getJson('/api/admin/me')->assertOk()->assertJsonPath('user.email', 'admin@example.com');
    }

    public function test_admin_can_approve_with_logo_and_download_proof(): void
    {
        $this->postJson('/api/floorplan', $this->booking())->assertCreated();
        $booking = Floorplan::sole();
        $admin = $this->admin();

        $this->actingAs($admin, 'sanctum')
            ->post("/api/admin/floorplans/{$booking->id}", [
                'status' => 'approved',
                'company_profile_name' => 'Acme',
                'company_logo' => UploadedFile::fake()->image('logo.png'),
            ], ['Accept' => 'application/json'])
            ->assertOk()
            ->assertJsonPath('data.status', 'approved')
            ->assertJsonPath('data.approved_by', 'Kailash');

        Storage::disk('public')->assertExists($booking->fresh()->company_logo);
        $this->getJson('/api/floorplan')->assertJsonPath('data.0.company_name', 'Acme');
        $this->actingAs($admin, 'sanctum')->get("/api/admin/floorplans/{$booking->id}/proof")->assertOk();
    }

    public function test_admin_cannot_approve_two_bookings_for_one_booth(): void
    {
        $first = Floorplan::create($this->booking(['file' => 'a.png', 'status' => 'approved']));
        $second = Floorplan::create($this->booking(['file' => 'b.png']));

        $this->actingAs($this->admin(), 'sanctum')
            ->postJson("/api/admin/floorplans/{$second->id}", ['status' => 'approved'])
            ->assertStatus(409);
        $this->assertSame('approved', $first->fresh()->status);
    }

    public function test_admin_can_list_filter_and_delete(): void
    {
        $this->postJson('/api/floorplan', $this->booking())->assertCreated();
        $this->postJson('/api/floorplan', $this->booking(['boothno' => '17', 'email' => 'other@example.com']))->assertCreated();
        $admin = $this->admin();

        $this->actingAs($admin, 'sanctum')->getJson('/api/admin/floorplans?search=other')
            ->assertOk()->assertJsonPath('total', 1)->assertJsonPath('stats.pending', 2);

        $booking = Floorplan::where('boothno', '17')->sole();
        $this->actingAs($admin, 'sanctum')->deleteJson("/api/admin/floorplans/{$booking->id}")->assertNoContent();
        Storage::disk('local')->assertMissing($booking->file);
        $this->assertSame(1, Floorplan::count());
    }
}
