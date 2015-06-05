'use strict';

var express = require('express');
var doctorAppointment = require('./controllers/doctorAppointment');
console.log('router');
module.exports = function() {
  var options = {
    caseSensitive: true
  };
  console.log("Inside Router");
  // Instantiate an isolated express Router instance
  var router = express.Router(options);
  router.get('/appointment', doctorAppointment.takeAppoiment);
  return router;
}