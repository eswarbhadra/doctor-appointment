'use strict';

var express = require('express');
//var UserController = require('./controllers/UserController');

module.exports = function() {
  var options = {
    caseSensitive: true
  };
console.log('inside router');
  // Instantiate an isolated express Router instance
  var router = express.Router(options);
 // router.post('/register', UserController.register);
 // router.post('/login', UserController.login);
 // router.put('/updateProfile', auth({debug: true}), UserController.update);
  return router;
}