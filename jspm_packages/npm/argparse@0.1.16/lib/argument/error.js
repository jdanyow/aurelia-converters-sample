/* */ 
'use strict';
var format = require("util").format;
var ERR_CODE = 'ARGError';
module.exports = function(argument, message) {
  var argumentName = null;
  var errMessage;
  var err;
  if (argument.getName) {
    argumentName = argument.getName();
  } else {
    argumentName = '' + argument;
  }
  if (!argumentName) {
    errMessage = message;
  } else {
    errMessage = format('argument "%s": %s', argumentName, message);
  }
  err = new TypeError(errMessage);
  err.code = ERR_CODE;
  return err;
};
