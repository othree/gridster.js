#!/bin/sh

echo 'uglifyjs init.js -o init.min.js --source-map init.min.js.map'
uglifyjs init.js -o init.min.js --source-map init.min.js.map
