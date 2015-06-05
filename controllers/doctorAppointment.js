'use strict';

var appointmentService = require('../services/appointmentService');

exports.takeAppoiment = function (req, res, next) {
  console.log("doctorAppointment controller - Inside takeAppoiment method");
  var entity = req.body;
  if(!entity.name) {
   console.log(entity);
   next({code: 400, message: 'Appointment entity is mandatory'});
  }


  appointmentService.appointment(entity, function (err, response) {
    if(err){
      return next(err);
     }
     req.data = {statusCode:201,
        content:response
     };
     next();
  });
};