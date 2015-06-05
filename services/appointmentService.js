'use strict';

  var UserSchema = require('../models/Appointment').appointmentSchema,
  config = require('config'),
  db = require('../datasource').getDb(config.MONGODB_URL),
  Appoinment = db.model('Appoinment', appoinementSchema);

exports.appointment = function(entity, callback) {
  Appoinment.create(entity, callback);
};
