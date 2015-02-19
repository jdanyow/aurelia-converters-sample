/* */ 
'use strict';
var $$ = require("./const");
var Action = module.exports = function Action(options) {
  options = options || {};
  this.optionStrings = options.optionStrings || [];
  this.dest = options.dest;
  this.nargs = options.nargs !== undefined ? options.nargs : null;
  this.constant = options.constant !== undefined ? options.constant : null;
  this.defaultValue = options.defaultValue;
  this.type = options.type !== undefined ? options.type : null;
  this.choices = options.choices !== undefined ? options.choices : null;
  this.required = options.required !== undefined ? options.required : false;
  this.help = options.help !== undefined ? options.help : null;
  this.metavar = options.metavar !== undefined ? options.metavar : null;
  if (!(this.optionStrings instanceof Array)) {
    throw new Error('optionStrings should be an array');
  }
  if (this.required !== undefined && typeof(this.required) !== 'boolean') {
    throw new Error('required should be a boolean');
  }
};
Action.prototype.getName = function() {
  if (this.optionStrings.length > 0) {
    return this.optionStrings.join('/');
  } else if (this.metavar !== null && this.metavar !== $$.SUPPRESS) {
    return this.metavar;
  } else if (this.dest !== undefined && this.dest !== $$.SUPPRESS) {
    return this.dest;
  }
  return null;
};
Action.prototype.isOptional = function() {
  return !this.isPositional();
};
Action.prototype.isPositional = function() {
  return (this.optionStrings.length === 0);
};
Action.prototype.call = function() {
  throw new Error('.call() not defined');
};
