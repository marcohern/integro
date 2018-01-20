<?php

namespace App\Http\Controllers\Sandbox;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SandboxController extends Controller
{

    public function __construct() {
    	$this->middleware('api');
    }
}
