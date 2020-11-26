#!/bin/bash

cd client
npm run build
mv build/ ../server/public
cd ../server
npm run deploy