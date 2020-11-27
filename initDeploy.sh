#!/bin/bash

sudo rm -rf server/public
cd client
npm run build
mv build/ ../server/public
cd ../server
npm run deploy