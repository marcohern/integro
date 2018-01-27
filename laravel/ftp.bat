REM Publish
set PBL=..\publish\ftp
php artisan config:cache
php artisan route:cache
php artisan config:clear

rmdir %PBL%\app /S /Q
rmdir %PBL%\bootstrap /S /Q
rmdir %PBL%\config /S /Q
rmdir %PBL%\public /S /Q
rmdir %PBL%\resources /S /Q
rmdir %PBL%\routes /S /Q
rmdir %PBL%\storage /S /Q

mkdir %PBL%\app
mkdir %PBL%\bootstrap
mkdir %PBL%\config
mkdir %PBL%\public
mkdir %PBL%\resources
mkdir %PBL%\routes
mkdir %PBL%\storage

xcopy app %PBL%\app /S /E /Y /I
xcopy bootstrap %PBL%\bootstrap /S /E /Y /I
xcopy config %PBL%\config /S /E /Y /I
xcopy public %PBL%\public /S /E /Y /I
xcopy resources %PBL%\resources /S /E /Y /I
xcopy routes %PBL%\routes /S /E /Y /I
xcopy storage %PBL%\storage /S /E /Y /I

del %PBL%\*.php
del %PBL%\*.js

copy .\*.php %PBL%
copy .\*.js %PBL%
