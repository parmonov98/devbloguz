<?php

use App\Http\Controllers\APIController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

Route::prefix('auth')->group(function () {
    // Route::get('data', [APIController::class, 'getData']);

    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
    Route::get('refresh', [AuthController::class, 'refresh']);
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('user', [AuthController::class, 'user']);
        Route::post('logout', 'AuthController@logout');
    });
});


// Route::middleware('auth:api')->get('/user', function (Request $request) {

//     return $request->user();
// });

Route::get('posts/search', [PostController::class, 'search']);

Route::get('post/{slug}', [PostController::class, 'slug']);
Route::get('user/{username}', [UserController::class, 'getByUsername']);
// Route::resource('posts', PostController::class);
Route::resource('posts', PostController::class, ['only' => ['index']]);

Route::resource('users', UserController::class);
