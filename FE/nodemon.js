var nodemon = require('nodemon');
nodemon("--legacy-watch --watch package.json --exec ' npm install && webpack'");