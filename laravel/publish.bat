REM Publish
php artisan config:cache
php artisan route:cache
del ..\publish\integro-win.zip
7z a ..\publish\integro-win.zip @publish.files.txt
