'use strict';

var express = require('express'),
    router = require('./router'),
    error = require('./middlewares/errorHandler');
var app = express();

var port = 7777;
app.use(router());
app.use(error());
app.listen(port);
console.log('Doctor appointment at ' + port + 'server started');