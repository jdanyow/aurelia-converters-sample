/* */ 
'use strict';
var util = require("util");
var Action = require("..\..\action.js");
var ActionStoreConstant = module.exports = function ActionStoreConstant(options) {
  options = options || {};
  options.nargs = 0;
  if (options.constant === undefined) {
    throw new Error('constant option is required for storeAction');
  }
  Action.call(this, options);
};
util.inherits(ActionStoreConstant, Action);
ActionStoreConstant.prototype.call = function(parser, namespace) {
  namespace.set(this.dest, this.constant);
};
