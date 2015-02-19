/* */ 
'use strict';
var util = require("util");
var Action = require("..\action.js");
var $$ = require("..\const.js");
var ActionVersion = module.exports = function ActionVersion(options) {
  options = options || {};
  options.defaultValue = (!!options.defaultValue ? options.defaultValue : $$.SUPPRESS);
  options.dest = (options.dest || $$.SUPPRESS);
  options.nargs = 0;
  this.version = options.version;
  Action.call(this, options);
};
util.inherits(ActionVersion, Action);
ActionVersion.prototype.call = function(parser) {
  var version = this.version || parser.version;
  var formatter = parser._getFormatter();
  formatter.addText(version);
  parser.exit(0, formatter.formatHelp());
};
