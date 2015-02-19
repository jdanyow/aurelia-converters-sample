/* */ 
'use strict';
var util = require("util");
var Action = require("..\action.js");
var $$ = require("..\const.js");
var ActionAppend = module.exports = function ActionAppend(options) {
  options = options || {};
  if (this.nargs <= 0) {
    throw new Error('nargs for append actions must be > 0; if arg ' + 'strings are not supplying the value to append, ' + 'the append const action may be more appropriate');
  }
  if (!!this.constant && this.nargs !== $$.OPTIONAL) {
    throw new Error('nargs must be OPTIONAL to supply const');
  }
  Action.call(this, options);
};
util.inherits(ActionAppend, Action);
ActionAppend.prototype.call = function(parser, namespace, values) {
  var items = [].concat(namespace[this.dest] || []);
  items.push(values);
  namespace.set(this.dest, items);
};
