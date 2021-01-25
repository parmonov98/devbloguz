<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class APIController extends Controller
{
    //
    public function index(Request $request)
    {
        echo $request->toJson();
    }

    public function getData(Request $request)
    {
        return $request->toArray();
    }
}
