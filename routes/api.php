<?php

use App\Http\Controllers\APIController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('contact', [PageController::class, 'storeMessage']);

Route::middleware('auth:api')->get('/user', function (Request $request) {

    return $request->user();

});

Route::get('data', [APIController::class, 'getData']);

Route::get('posts/search', [PostController::class, 'search']);

Route::resource('posts', PostController::class);
Route::resource('users', UserController::class);
