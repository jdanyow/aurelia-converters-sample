/* */ 
'use strict';
var util = require("util");
var Action = require("..\..\action.js");
var ActionAppendConstant = module.exports = function ActionAppendConstant(options) {
  options = options || {};
  options.nargs = 0;
  if (options.constant === undefined) {
    throw new Error('constant option is required for appendAction');
  }
  Action.call(this, options);
};
util.inherits(ActionAppendConstant, Action);
ActionAppendConstant.prototype.call = function(parser, namespace) {
  var items = [].concat(namespace[this.dest] || []);
  items.push(this.constant);
  namespace.set(this.dest, items);
};
