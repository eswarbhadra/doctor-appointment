'use strict';

/**
 * Main application init file.
 * This is the application for booking doctor appointment
 * @author      veerabhadra
 * @version     1.0
 */


var express = require('express'),
  router = require('./router'),
  responser = require('./middlewares/responser'),
  errorHandler = require('./middlewares/errorHandler');


var app = express();
var port = 7777;

app.use(router());
app.use(responser());
app.use(errorHandler());


app.listen(port);