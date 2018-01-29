@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
            	<div class="panel-heading">PayU API (Sandbox)</div>
            	<div class="panel-body">
            		<p>This is an example of PayU using PayU API sandbox.</p>
                    <form>
                        <div class="row">
                            <div class="col-xs-9">
                                <div class="form-group">
                                    <label for="product">Select the fake product you want to buy</label>
                                    <select class="form-control" name="product" id="products" onchange="onSelectProduct()">
                                        <option value="">-- Select a FAKE product --</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-3">
                                <div class="form-group">
                                    <label for="price">Price</label>
                                    <p><strong>$ <span id="price"></span></strong></p>
                                </div>  
                            </div>
                        </div>
                    </form>
            	</div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
<script src="{{ asset('js/payu_sandbox.js') }}"></script>
@endsection