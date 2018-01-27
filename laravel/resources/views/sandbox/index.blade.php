@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Sandbox</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-primary btn-lg" href="#"><i class="glyphicon glyphicon-asterisk"></i> Mobili: Mobile Image</a>
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-primary btn-lg" href="{{ route('sandbox_payu_sandbox') }}"><i class="glyphicon glyphicon-asterisk"></i> PayU API (Sandbox)</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-primary btn-lg" href="#"><i class="glyphicon glyphicon-asterisk"></i> PayU API (Production)</a>
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-primary btn-lg" href="#"><i class="glyphicon glyphicon-asterisk"></i> Sapari</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-primary btn-lg" href="#"><i class="glyphicon glyphicon-asterisk"></i> Sapari</a>
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-primary btn-lg" href="#"><i class="glyphicon glyphicon-asterisk"></i> Sapari</a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <a class="btn btn-primary btn-lg" href="#"><i class="glyphicon glyphicon-asterisk"></i> Sapari</a>
                        </div>
                        <div class="col-md-6">
                            <a class="btn btn-primary btn-lg" href="#"><i class="glyphicon glyphicon-asterisk"></i> Sapari</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
