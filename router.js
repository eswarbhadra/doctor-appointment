'use strict';

var express = require('express');
var doctorAppointment = require('./controllers/doctorAppointment');
module.exports = function() {
  var options = {
    caseSensitive: true
  };
  var router = express.Router(options);
  router.post('/appointments', doctorAppointment.takeAppoiment);
  return router;
}