'use strict';

var express = require('express'),
    router = require('./router');
var app = express();

var port = 7777;
app.use(router());
app.listen(port);
console.log('Doctor appointment at ' + port + 'server started');