'use strict';

/**
 * Main application init file.
 * This is the application for booking doctor appointment
 * @author      veerabhadra
 * @version     1.0
 */


var express = require('express'),
    router = require('./router'),
    error = require('./middlewares/errorHandler')
    config = require('config'),
    responser = require('./middlewares/responser');

var app = express();
var port = 7777;

app.use(router());
app.use(error());
app.use(responser());

app.listen(port);