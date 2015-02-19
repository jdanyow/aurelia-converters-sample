/* */ 
'use strict';
var util = require("util");
var Action = require("..\action.js");
var ActionCount = module.exports = function ActionCount(options) {
  options = options || {};
  options.nargs = 0;
  Action.call(this, options);
};
util.inherits(ActionCount, Action);
ActionCount.prototype.call = function(parser, namespace) {
  namespace.set(this.dest, (namespace[this.dest] || 0) + 1);
};
