<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// Booth bookings from the floor plan. Column names match the ProFX Expo floorplans table
// (incl. its spellings `referal_code` and `boothammount`) so data can be moved between them.
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('floorplans', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email');
            $table->string('phone', 30);
            $table->string('company')->nullable();
            $table->string('referal_code', 100)->nullable();

            $table->string('boothno', 10)->index();
            $table->string('boothtitle')->nullable();
            $table->string('boothsize', 50)->nullable();
            $table->decimal('boothammount', 10, 2)->nullable();

            $table->string('paymenttype', 20)->nullable();
            $table->string('networktype', 50)->nullable();
            $table->string('file')->nullable(); // payment proof, private disk

            $table->string('company_profile_name')->nullable();
            $table->text('company_details')->nullable();
            $table->string('company_url')->nullable();
            $table->string('company_logo')->nullable(); // public disk
            $table->string('booth_design')->nullable();
            $table->string('booth_design_image')->nullable(); // public disk

            $table->string('status', 20)->default('pending')->index(); // pending | approved | rejected
            $table->text('approval_message')->nullable();
            $table->string('approved_by')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('floorplans');
    }
};
