'use strict';

/**
 * Main application init file.
 * This is the application for booking doctor appointment
 * @author      veerabhadra
 * @version     1.0
 */

var express = require('express'),
  router = require('./router'),
  bodyParser = require('body-parser'),
  responser = require('./middlewares/responser'),
  errorHandler = require('./middlewares/errorHandler');

var app = express();
var port = 7777;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router());
app.use(responser());
app.use(errorHandler());

app.listen(port);
console.log('Application running')