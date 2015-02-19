/* */ 
'use strict';
var util = require("util");
var Action = require("..\action.js");
var $$ = require("..\const.js");
var ActionHelp = module.exports = function ActionHelp(options) {
  options = options || {};
  if (options.defaultValue !== null) {
    options.defaultValue = options.defaultValue;
  } else {
    options.defaultValue = $$.SUPPRESS;
  }
  options.dest = (options.dest !== null ? options.dest : $$.SUPPRESS);
  options.nargs = 0;
  Action.call(this, options);
};
util.inherits(ActionHelp, Action);
ActionHelp.prototype.call = function(parser) {
  parser.printHelp();
  parser.exit();
};
