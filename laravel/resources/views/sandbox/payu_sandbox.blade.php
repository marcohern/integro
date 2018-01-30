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
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label for="ccs">Pick a fake Credit card</label>
                                    <select class="form-control" name="ccs" id="ccs" onchange="onSelectCreditCard()">
                                        <option value="">-- Clear --</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="form-group">
                                    <label for="ccs">Pick a fake Address</label>
                                    <select class="form-control" name="addresses" id="addresses" onchange="onSelectAddress()">
                                        <option value="">-- Clear --</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading">Credit Card</div>
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <select class="form-control" name="cctype" id="cctype" >
                                                <option value="">-- CC Type --</option>
                                            </select>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-9">
                                                <div class="form-group">
                                                    <label for="ccnum">CC Number</label>
                                                    <input class="form-control" type="text" name="ccnum" id="ccnum" />
                                                </div>
                                            </div>
                                            <div class="col-xs-3">
                                                <div class="form-group">
                                                    <label for="ccv">CCV</label>
                                                    <input class="form-control" type="text" name="ccv" id="ccv" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="ccyear">CC Year</label>
                                                    <input class="form-control" type="text" name="ccyear" id="ccyear" />
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="ccmonth">CC Month</label>
                                                    <input class="form-control" type="text" name="ccmonth" id="ccmonth" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="ccname">CC Name</label>
                                            <input class="form-control" type="text" name="ccname" id="ccname" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-6">
                                <div class="panel panel-default">
                                    <div class="panel-heading">Address</div>
                                    <div class="panel-body">
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="fname">FName</label>
                                                    <input class="form-control" type="text" name="fname" id="fname" />
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="form-group">
                                                    <label for="lname">LName</label>
                                                    <input class="form-control" type="text" name="lname" id="lname" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input class="form-control" type="text" name="email" id="email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="address1">Address 1</label>
                                            <input class="form-control" type="text" name="address1" id="address1" />
                                        </div>
                                        <div class="form-group">
                                            <label for="address2">Address 2</label>
                                            <input class="form-control" type="text" name="address2" id="address2" />
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-4">
                                                <div class="form-group">
                                                    <label for="city">City</label>
                                                    <input class="form-control" type="text" name="city" id="city" />
                                                </div>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="form-group">
                                                    <label for="state">State</label>
                                                    <input class="form-control" type="text" name="state" id="state" />
                                                </div>
                                            </div>
                                            <div class="col-xs-4">
                                                <div class="form-group">
                                                    <label for="zip">Zip</label>
                                                    <input class="form-control" type="text" name="zip" id="zip" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="phone">Phone</label>
                                            <input class="form-control" type="text" name="phone" id="phone" />
                                        </div>
                                    </div>
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
<script src="{{ asset('sandbox/js/payu_sandbox.js') }}"></script>
@endsection