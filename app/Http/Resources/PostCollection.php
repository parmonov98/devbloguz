<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;

class PostCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public static $wrap = 'posts';

    public function toArray($request)
    {
        // dd($request);
        // return [
        //     'posts' => $this->collection,
        //     'custom_links' => [
        //         'self' => 'link-value',
        //     ],
        // ];
        return parent::toArray($request);
    }
}
