'use strict';

  var appointmentSchema = require('../models/appointment').appointmentSchema,
  config = require('config'),
  db = require('../datasource').getDb(config.MONGODB_URL),
  appointment = db.model('appointment', appointmentSchema);

exports.appointment = function(entity, callback) {
  appointment.create(entity, callback);
};
