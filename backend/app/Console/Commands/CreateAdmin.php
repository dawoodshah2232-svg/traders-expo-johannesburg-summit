<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Validator;

// php artisan admin:create admin@example.com "Admin Name"  (asks for the password)
class CreateAdmin extends Command
{
    protected $signature = 'admin:create {email} {name}';

    protected $description = 'Create an admin user for the React admin panel, or reset an existing one\'s password';

    public function handle(): int
    {
        $email = $this->argument('email');
        $password = $this->secret('Password (min 10 characters)');

        $validator = Validator::make(compact('email', 'password'), [
            'email' => ['required', 'email', 'not_regex:/[\r\n]/'],
            'password' => ['required', 'string', 'min:10'],
        ]);
        if ($validator->fails()) {
            $this->error($validator->errors()->first());
            return self::FAILURE;
        }

        $user = User::firstOrNew(['email' => $email]);
        $user->name = $this->argument('name');
        $user->password = $password; // hashed by the model cast
        $user->is_admin = true;
        $user->save();

        $this->info(($user->wasRecentlyCreated ? 'Created' : 'Updated') . " admin {$email}");
        return self::SUCCESS;
    }
}
