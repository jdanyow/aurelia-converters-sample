/* */ 
'use strict';
var util = require("util");
var ActionContainer = require("..\action_container.js");
var ArgumentGroup = module.exports = function ArgumentGroup(container, options) {
  options = options || {};
  options.conflictHandler = (options.conflictHandler || container.conflictHandler);
  options.prefixChars = (options.prefixChars || container.prefixChars);
  options.argumentDefault = (options.argumentDefault || container.argumentDefault);
  ActionContainer.call(this, options);
  this.title = options.title;
  this._groupActions = [];
  this._container = container;
  this._registries = container._registries;
  this._actions = container._actions;
  this._optionStringActions = container._optionStringActions;
  this._defaults = container._defaults;
  this._hasNegativeNumberOptionals = container._hasNegativeNumberOptionals;
  this._mutuallyExclusiveGroups = container._mutuallyExclusiveGroups;
};
util.inherits(ArgumentGroup, ActionContainer);
ArgumentGroup.prototype._addAction = function(action) {
  action = ActionContainer.prototype._addAction.call(this, action);
  this._groupActions.push(action);
  return action;
};
ArgumentGroup.prototype._removeAction = function(action) {
  ActionContainer.prototype._removeAction.call(this, action);
  var actionIndex = this._groupActions.indexOf(action);
  if (actionIndex >= 0) {
    this._groupActions.splice(actionIndex, 1);
  }
};
