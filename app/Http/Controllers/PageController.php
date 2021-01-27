<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Validator;

class PageController extends Controller
{
    //
    public function storeMessage(Request $request)
    {

        $rules = array(
            'name' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'text' => 'required'
        );
        $messages = array(
            'name.required' => 'Please enter a title.',
            'email.required' => 'Please enter a price.',
            'phone.required' => 'Please enter a your phone.',
            'text.required' => 'Please enter a your message.'
        );

        $validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) {
            // $messages = $validator->messages();
            // $errors = $messages->all();
            if ($validator->fails()) {
                // get first error message
                $error = $validator->errors()->first();
                // get all errors
                $errors = $validator->errors()->all();
            }
            return response()->json([
                "success" => false,
                "message" => "Validation Error",
                "title" => $error // or $errors
            ]);
            // return $this->respondWithError($errors, 500);
        }

        $item = new Message();

        $item->name = $request->name;
        $item->email = $request->email;
        $item->phone = $request->phone;
        $item->text = $request->text;

        $item->save();
        $item->refresh();

        $contact = [
            "isSite" => "yes",
            "message_id" => $item->id,
            "via" => "devblog.uz",
            "name" => $item->name,
            "phone" => $item->phone,
            "email" => $item->email,
            "message" => $item->text,
            "lang" => 'en'
        ];

        $http = Http::post( env('APP_URL', 'https://parmonov98.uz') . '/receive.php', $contact );
        // echo $http->json();
        return $item;
    }
}
