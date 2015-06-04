'use strict';

var appointmentService = require('../services/appointmentService');

exports.takeAppoiment = function (req, res, next) {
  console.log("doctorAppointment controller - Inside takeAppoiment method");
  var entity = req.body;
  if(!entity) {
   console.log(entity);
   next({code: 400, message: 'Appointment not booked'});
  }

  appointmentService.appointment(entity, next);
}