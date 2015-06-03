'use strict';

var express = require('express');
var doctorAppointment = require('./controllers/doctorAppointment');

module.exports = function() {
  var options = {
    caseSensitive: true
  };
  console.log("Inside Router");
  // Instantiate an isolated express Router instance
  var router = express.Router(options);
  router.get('/', doctorAppointment.takeAppoiment);
  router.get('/appointment', doctorAppointment.takeAppoiment);
  return router;
}