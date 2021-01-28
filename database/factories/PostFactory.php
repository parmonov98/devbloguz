<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;


class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // User::where('username', 'like', 'test@user.com')->get()->random()->id;
        // print_r(User::all()->random());
        $title = $this->faker->words(random_int(1, 10), true);
        $paragraphs = $this->faker->paragraphs(10);
        foreach ($paragraphs as $key => $p) {
            $p = Str::start($p, '<p>');
            $p = Str::of($p)->append('</p>');
            $paragraphs[$key] = $p;
        }

        return [
            'title' => $title,
            'slug' => Str::slug($title, '-'),
            'user_id' => User::all()->random()->id,
            'description' => $this->faker->words(30, true),
            'image' => 'post-bg.jpg',
            'content' => implode(
                "",
                $paragraphs
            ),
            'created_at' => $this->faker->dateTimeBetween("-05 years")
        ];
    }
}
