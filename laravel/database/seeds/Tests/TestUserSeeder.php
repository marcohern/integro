<?php

use Illuminate\Database\Seeder;

class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'Marco Hernandez',
            'email' => 'marcohern@gmail.com',
            'password' => bcrypt('system'),
        ]);
    }
}
