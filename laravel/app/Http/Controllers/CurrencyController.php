<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;

class CurrencyController extends Controller
{
    public function index()
    {
        $data = Cache::remember('currency_data', now()->addMinutes(5), function() {
            $response = Http::get('https://api.monobank.ua/bank/currency');
            return $response->json();
        });
        return response()->json($data, 200);
    }
}
