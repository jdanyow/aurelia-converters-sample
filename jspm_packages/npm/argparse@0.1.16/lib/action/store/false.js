/* */ 
'use strict';
var util = require("util");
var ActionStoreConstant = require("./constant");
var ActionStoreFalse = module.exports = function ActionStoreFalse(options) {
  options = options || {};
  options.constant = false;
  options.defaultValue = options.defaultValue !== null ? options.defaultValue : true;
  ActionStoreConstant.call(this, options);
};
util.inherits(ActionStoreFalse, ActionStoreConstant);
