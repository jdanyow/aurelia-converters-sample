/* */ 
'use strict';
var format = require("util").format;
var _ = require("underscore");
_.str = require("underscore.string");
var $$ = require("./const");
var ActionHelp = require("./action\help");
var ActionAppend = require("./action\append");
var ActionAppendConstant = require("./action\append\constant");
var ActionCount = require("./action\count");
var ActionStore = require("./action\store");
var ActionStoreConstant = require("./action\store\constant");
var ActionStoreTrue = require("./action\store\true");
var ActionStoreFalse = require("./action\store\false");
var ActionVersion = require("./action\version");
var ActionSubparsers = require("./action\subparsers");
var argumentErrorHelper = require("./argument\error");
var ActionContainer = module.exports = function ActionContainer(options) {
  options = options || {};
  this.description = options.description;
  this.argumentDefault = options.argumentDefault;
  this.prefixChars = options.prefixChars || '';
  this.conflictHandler = options.conflictHandler;
  this._registries = {};
  this.register('action', null, ActionStore);
  this.register('action', 'store', ActionStore);
  this.register('action', 'storeConst', ActionStoreConstant);
  this.register('action', 'storeTrue', ActionStoreTrue);
  this.register('action', 'storeFalse', ActionStoreFalse);
  this.register('action', 'append', ActionAppend);
  this.register('action', 'appendConst', ActionAppendConstant);
  this.register('action', 'count', ActionCount);
  this.register('action', 'help', ActionHelp);
  this.register('action', 'version', ActionVersion);
  this.register('action', 'parsers', ActionSubparsers);
  this._getHandler();
  this._actions = [];
  this._optionStringActions = {};
  this._actionGroups = [];
  this._mutuallyExclusiveGroups = [];
  this._defaults = {};
  this._regexpNegativeNumber = new RegExp('^[-]?[0-9]*\\.?[0-9]+([eE][-+]?[0-9]+)?$');
  this._hasNegativeNumberOptionals = [];
};
var ArgumentGroup = require("./argument\group");
var MutuallyExclusiveGroup = require("./argument\exclusive");
ActionContainer.prototype.register = function(registryName, value, object) {
  this._registries[registryName] = this._registries[registryName] || {};
  this._registries[registryName][value] = object;
};
ActionContainer.prototype._registryGet = function(registryName, value, defaultValue) {
  if (3 > arguments.length) {
    defaultValue = null;
  }
  return this._registries[registryName][value] || defaultValue;
};
ActionContainer.prototype.setDefaults = function(options) {
  options = options || {};
  for (var property in options) {
    this._defaults[property] = options[property];
  }
  this._actions.forEach(function(action) {
    if (action.dest in options) {
      action.defaultValue = options[action.dest];
    }
  });
};
ActionContainer.prototype.getDefault = function(dest) {
  var result = (_.has(this._defaults, dest)) ? this._defaults[dest] : null;
  this._actions.forEach(function(action) {
    if (action.dest === dest && _.has(action, 'defaultValue')) {
      result = action.defaultValue;
    }
  });
  return result;
};
ActionContainer.prototype.addArgument = function(args, options) {
  args = args;
  options = options || {};
  if (!_.isArray(args)) {
    throw new TypeError('addArgument first argument should be an array');
  }
  if (!_.isObject(options) || _.isArray(options)) {
    throw new TypeError('addArgument second argument should be a hash');
  }
  if (!args || args.length === 1 && this.prefixChars.indexOf(args[0][0]) < 0) {
    if (args && !!options.dest) {
      throw new Error('dest supplied twice for positional argument');
    }
    options = this._getPositional(args, options);
  } else {
    options = this._getOptional(args, options);
  }
  if (_.isUndefined(options.defaultValue)) {
    var dest = options.dest;
    if (_.has(this._defaults, dest)) {
      options.defaultValue = this._defaults[dest];
    } else if (!_.isUndefined(this.argumentDefault)) {
      options.defaultValue = this.argumentDefault;
    }
  }
  var ActionClass = this._popActionClass(options);
  if (!_.isFunction(ActionClass)) {
    throw new Error(format('Unknown action "%s".', ActionClass));
  }
  var action = new ActionClass(options);
  var typeFunction = this._registryGet('type', action.type, action.type);
  if (!_.isFunction(typeFunction)) {
    throw new Error(format('"%s" is not callable', typeFunction));
  }
  return this._addAction(action);
};
ActionContainer.prototype.addArgumentGroup = function(options) {
  var group = new ArgumentGroup(this, options);
  this._actionGroups.push(group);
  return group;
};
ActionContainer.prototype.addMutuallyExclusiveGroup = function(options) {
  var group = new MutuallyExclusiveGroup(this, options);
  this._mutuallyExclusiveGroups.push(group);
  return group;
};
ActionContainer.prototype._addAction = function(action) {
  var self = this;
  this._checkConflict(action);
  this._actions.push(action);
  action.container = this;
  action.optionStrings.forEach(function(optionString) {
    self._optionStringActions[optionString] = action;
  });
  action.optionStrings.forEach(function(optionString) {
    if (optionString.match(self._regexpNegativeNumber)) {
      if (!_.any(self._hasNegativeNumberOptionals)) {
        self._hasNegativeNumberOptionals.push(true);
      }
    }
  });
  return action;
};
ActionContainer.prototype._removeAction = function(action) {
  var actionIndex = this._actions.indexOf(action);
  if (actionIndex >= 0) {
    this._actions.splice(actionIndex, 1);
  }
};
ActionContainer.prototype._addContainerActions = function(container) {
  var titleGroupMap = {};
  this._actionGroups.forEach(function(group) {
    if (titleGroupMap[group.title]) {
      throw new Error(format('Cannot merge actions - two groups are named "%s".', group.title));
    }
    titleGroupMap[group.title] = group;
  });
  var groupMap = {};
  function actionHash(action) {
    return action.getName();
  }
  container._actionGroups.forEach(function(group) {
    if (!titleGroupMap[group.title]) {
      titleGroupMap[group.title] = this.addArgumentGroup({
        title: group.title,
        description: group.description
      });
    }
    group._groupActions.forEach(function(action) {
      groupMap[actionHash(action)] = titleGroupMap[group.title];
    });
  }, this);
  var mutexGroup;
  container._mutuallyExclusiveGroups.forEach(function(group) {
    mutexGroup = this.addMutuallyExclusiveGroup({required: group.required});
    group._groupActions.forEach(function(action) {
      groupMap[actionHash(action)] = mutexGroup;
    });
  }, this);
  container._actions.forEach(function(action) {
    var key = actionHash(action);
    if (!!groupMap[key]) {
      groupMap[key]._addAction(action);
    } else {
      this._addAction(action);
    }
  });
};
ActionContainer.prototype._getPositional = function(dest, options) {
  if (_.isArray(dest)) {
    dest = _.first(dest);
  }
  if (options.required) {
    throw new Error('"required" is an invalid argument for positionals.');
  }
  if (options.nargs !== $$.OPTIONAL && options.nargs !== $$.ZERO_OR_MORE) {
    options.required = true;
  }
  if (options.nargs === $$.ZERO_OR_MORE && options.defaultValue === undefined) {
    options.required = true;
  }
  options.dest = dest;
  options.optionStrings = [];
  return options;
};
ActionContainer.prototype._getOptional = function(args, options) {
  var prefixChars = this.prefixChars;
  var optionStrings = [];
  var optionStringsLong = [];
  args.forEach(function(optionString) {
    if (prefixChars.indexOf(optionString[0]) < 0) {
      throw new Error(format('Invalid option string "%s": must start with a "%s".', optionString, prefixChars));
    }
    optionStrings.push(optionString);
    if (optionString.length > 1 && prefixChars.indexOf(optionString[1]) >= 0) {
      optionStringsLong.push(optionString);
    }
  });
  var dest = options.dest || null;
  delete options.dest;
  if (!dest) {
    var optionStringDest = optionStringsLong.length ? optionStringsLong[0] : optionStrings[0];
    dest = _.str.strip(optionStringDest, this.prefixChars);
    if (dest.length === 0) {
      throw new Error(format('dest= is required for options like "%s"', optionStrings.join(', ')));
    }
    dest = dest.replace(/-/g, '_');
  }
  options.dest = dest;
  options.optionStrings = optionStrings;
  return options;
};
ActionContainer.prototype._popActionClass = function(options, defaultValue) {
  defaultValue = defaultValue || null;
  var action = (options.action || defaultValue);
  delete options.action;
  var actionClass = this._registryGet('action', action, action);
  return actionClass;
};
ActionContainer.prototype._getHandler = function() {
  var handlerString = this.conflictHandler;
  var handlerFuncName = "_handleConflict" + _.str.capitalize(handlerString);
  var func = this[handlerFuncName];
  if (typeof func === 'undefined') {
    var msg = "invalid conflict resolution value: " + handlerString;
    throw new Error(msg);
  } else {
    return func;
  }
};
ActionContainer.prototype._checkConflict = function(action) {
  var optionStringActions = this._optionStringActions;
  var conflictOptionals = [];
  action.optionStrings.forEach(function(optionString) {
    var conflOptional = optionStringActions[optionString];
    if (typeof conflOptional !== 'undefined') {
      conflictOptionals.push([optionString, conflOptional]);
    }
  });
  if (conflictOptionals.length > 0) {
    var conflictHandler = this._getHandler();
    conflictHandler.call(this, action, conflictOptionals);
  }
};
ActionContainer.prototype._handleConflictError = function(action, conflOptionals) {
  var conflicts = _.map(conflOptionals, function(pair) {
    return pair[0];
  });
  conflicts = conflicts.join(', ');
  throw argumentErrorHelper(action, format('Conflicting option string(s): %s', conflicts));
};
ActionContainer.prototype._handleConflictResolve = function(action, conflOptionals) {
  var self = this;
  conflOptionals.forEach(function(pair) {
    var optionString = pair[0];
    var conflictingAction = pair[1];
    var i = conflictingAction.optionStrings.indexOf(optionString);
    if (i >= 0) {
      conflictingAction.optionStrings.splice(i, 1);
    }
    delete self._optionStringActions[optionString];
    if (conflictingAction.optionStrings.length === 0) {
      conflictingAction.container._removeAction(conflictingAction);
    }
  });
};
