/* */ 
'use strict';
var util = require("util");
var ArgumentGroup = require("./group");
var MutuallyExclusiveGroup = module.exports = function MutuallyExclusiveGroup(container, options) {
  var required;
  options = options || {};
  required = options.required || false;
  ArgumentGroup.call(this, container);
  this.required = required;
};
util.inherits(MutuallyExclusiveGroup, ArgumentGroup);
MutuallyExclusiveGroup.prototype._addAction = function(action) {
  var msg;
  if (action.required) {
    msg = 'mutually exclusive arguments must be optional';
    throw new Error(msg);
  }
  action = this._container._addAction(action);
  this._groupActions.push(action);
  return action;
};
MutuallyExclusiveGroup.prototype._removeAction = function(action) {
  this._container._removeAction(action);
  this._groupActions.remove(action);
};
