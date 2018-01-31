<?php

namespace App\Http\Controllers\Sandbox;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Alexo\LaravelPayU\LaravelPayU;

class SandboxController extends Controller
{
    public function index() {
    	return view('sandbox/index');
    }

    public function payu_sandbox() {
    	return view('sandbox/payu_sandbox');
    }

    public function payu_sandbox_pay() {
    	$payment = ['success' => true];

    	LaravelPayU::doPing(function($response) use(&$payment) {

    		$payment['payed'] = $response;
    	}, function ($error)  use(&$payment) {
			$payment['error'] = $error;
    	});
    	return $payment;
    }
}
