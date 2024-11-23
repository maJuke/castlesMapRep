<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CastleModel;

class MainController extends Controller
{
    public function home() {        
        return view("home");
    }

    public function about() {
        return view("about");
    }

    public function castlesList() {
        $castle = CastleModel::all();
        return response() ->json([
            //'status' => 200,
            'castles' => $castle,
        ]);
    }
}
