'use strict';

var appointmentService = require('../services/appointmentService');

exports.takeAppoiment = function (req, res, next) {
  console.log("doctorAppointment controller - Inside takeAppoiment method");
  var entity = req.body;
  console.log(req.body);
  appointmentService.appointment(entity, next);
}