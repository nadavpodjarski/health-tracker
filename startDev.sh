#!/bin/bash

cd client 
[ ! -d "node_modules" ] && npm i --silent
 cd ../server 
[ ! -d "node_modules" ]  && npm i --silent
npm run startdev