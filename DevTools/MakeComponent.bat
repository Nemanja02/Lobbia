mkdir "components/%1";
copy "DevTools\files\Placeholder.js" "components\%1\%1.js"
copy "DevTools\files\Placeholder.module.scss" "components\%1\%1.module.scss"
powershell -Command "(gc components\%1\%1.js) -replace 'Placeholder', '%1' | Out-File -encoding ASCII components\%1\%1.js"