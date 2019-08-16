#!/bin/sh

mkdir components/$1;
cp DevTools/files/Placeholder.js "./components/$1/$1.js"
cp DevTools/files/Placeholder.module.scss "./components/$1/$1.module.scss"
perl -pi -e "s/Placeholder/$1/g" "./components/$1/$1.js"