<?php

namespace App\Http\Controllers\Sandbox;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SandboxController extends Controller
{
    public function index() {
    	return view('sandbox/index');
    }

    public function payu_sandbox() {
    	return view('sandbox/payu_sandbox');
    }
}
