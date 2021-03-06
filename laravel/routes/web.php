<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::prefix('sandbox')->group(function () {
    Route::get('/', 'Sandbox\SandboxController@index')->name('sandbox_index');
    Route::get('/payu_sandbox', 'Sandbox\SandboxController@payu_sandbox')->name('sandbox_payu_sandbox');
    Route::get('/payu_sandbox_pay', 'Sandbox\SandboxController@payu_sandbox_pay')->name('sandbox_payu_sandbox_pay');
    
    
});
