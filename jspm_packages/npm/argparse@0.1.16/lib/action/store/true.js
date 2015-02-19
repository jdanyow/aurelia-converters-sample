/* */ 
'use strict';
var util = require("util");
var ActionStoreConstant = require("./constant");
var ActionStoreTrue = module.exports = function ActionStoreTrue(options) {
  options = options || {};
  options.constant = true;
  options.defaultValue = options.defaultValue !== null ? options.defaultValue : false;
  ActionStoreConstant.call(this, options);
};
util.inherits(ActionStoreTrue, ActionStoreConstant);
