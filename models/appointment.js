'use strict';

var mongoose = require('../datasource').getMongoose(),
  Schema = mongoose.Schema;

var appointmentSchema = new Schema({
  name: String,
  age: String,
  time: String
});

/**
 * Module exports
 */
module.exports = {
  appointmentSchema: appointmentSchema
};