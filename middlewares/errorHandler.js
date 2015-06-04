'use strict';

var middleware = function(err, req, res, next) {
  console.log("Middleware" + err.code);
  res.status(err.code || 500).json(err);
};

module.exports = function() {
  return middleware;
}