'use strict';

  var UserSchema = require('../models/Appointment').appointmentSchema,
  config = require('config'),
  db = require('../datasource').getDb(config.MONGODB_URL),
  User = db.model('User', UserSchema);

exports.appointment = function(entity, callback) {
  User.create(entity, callback);
};
