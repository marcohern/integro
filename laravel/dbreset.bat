REM Database Reset
php artisan config:cache
php artisan route:cache
php artisan migrate:refresh
php artisan db:seed
php artisan passport:install