<?php

namespace Database\Factories;

use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

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
        return [
            'title' => $this->faker->words(random_int(1, 10), true),
            'user_id' => User::all()->random()->id,
            'description' => $this->faker->words(30, true),
            'image' => 'post-bg.jpg',
            'content' => $this->faker->words(200, true),
            'created_at' => $this->faker->dateTimeBetween("-02 years")
        ];
    }
}
