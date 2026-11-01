<?php

use App\Http\Controllers\Api\Admin\AuthController;
use App\Http\Controllers\Api\Admin\FloorplanController as AdminFloorplanController;
use App\Http\Controllers\Api\FloorplanController;
use Illuminate\Support\Facades\Route;

/*
| All routes here are served at /api/... (live: https://thetradersexpo.com/backend/api/...)
*/

// Public
Route::get('/floorplan', [FloorplanController::class, 'index']);
Route::post('/floorplan', [FloorplanController::class, 'store'])->middleware('throttle:10,1');

// Admin
Route::post('/admin/login', [AuthController::class, 'login'])->middleware('throttle:10,1');

Route::middleware(['auth:sanctum', 'admin'])->prefix('admin')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/floorplans', [AdminFloorplanController::class, 'index']);
    Route::get('/floorplans/{floorplan}', [AdminFloorplanController::class, 'show']);
    Route::post('/floorplans/{floorplan}', [AdminFloorplanController::class, 'update']);
    Route::delete('/floorplans/{floorplan}', [AdminFloorplanController::class, 'destroy']);
    Route::get('/floorplans/{floorplan}/proof', [AdminFloorplanController::class, 'proof']);
});
