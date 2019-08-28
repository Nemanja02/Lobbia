#!/bin/sh

cd /home/Lobbia

git pull
npm run build
killall node
npm start