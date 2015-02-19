/* */ 
(function(process) {
  'use strict';
  var util = require("util");
  var format = require("util").format;
  var Path = require("path");
  var _ = require("underscore");
  _.str = require("underscore.string");
  var $$ = require("./const");
  var ActionContainer = require("./action_container");
  var argumentErrorHelper = require("./argument\error");
  var HelpFormatter = require("./help\formatter");
  var Namespace = require("./namespace");
  var ArgumentParser = module.exports = function ArgumentParser(options) {
    var self = this;
    options = options || {};
    options.description = (options.description || null);
    options.argumentDefault = (options.argumentDefault || null);
    options.prefixChars = (options.prefixChars || '-');
    options.conflictHandler = (options.conflictHandler || 'error');
    ActionContainer.call(this, options);
    options.addHelp = (options.addHelp === undefined || !!options.addHelp);
    options.parents = (options.parents || []);
    options.prog = (options.prog || Path.basename(process.argv[1]));
    this.prog = options.prog;
    this.usage = options.usage;
    this.epilog = options.epilog;
    this.version = options.version;
    this.debug = (options.debug === true);
    this.formatterClass = (options.formatterClass || HelpFormatter);
    this.fromfilePrefixChars = options.fromfilePrefixChars || null;
    this._positionals = this.addArgumentGroup({title: 'Positional arguments'});
    this._optionals = this.addArgumentGroup({title: 'Optional arguments'});
    this._subparsers = null;
    var FUNCTION_IDENTITY = function(o) {
      return o;
    };
    this.register('type', 'auto', FUNCTION_IDENTITY);
    this.register('type', null, FUNCTION_IDENTITY);
    this.register('type', 'int', function(x) {
      var result = parseInt(x, 10);
      if (isNaN(result)) {
        throw new Error(x + ' is not a valid integer.');
      }
      return result;
    });
    this.register('type', 'float', function(x) {
      var result = parseFloat(x);
      if (isNaN(result)) {
        throw new Error(x + ' is not a valid float.');
      }
      return result;
    });
    this.register('type', 'string', function(x) {
      return '' + x;
    });
    var defaultPrefix = (this.prefixChars.indexOf('-') > -1) ? '-' : this.prefixChars[0];
    if (options.addHelp) {
      this.addArgument([defaultPrefix + 'h', defaultPrefix + defaultPrefix + 'help'], {
        action: 'help',
        defaultValue: $$.SUPPRESS,
        help: 'Show this help message and exit.'
      });
    }
    if (this.version !== undefined) {
      this.addArgument([defaultPrefix + 'v', defaultPrefix + defaultPrefix + 'version'], {
        action: 'version',
        version: this.version,
        defaultValue: $$.SUPPRESS,
        help: "Show program's version number and exit."
      });
    }
    options.parents.forEach(function(parent) {
      self._addContainerActions(parent);
      if (parent._defaults !== undefined) {
        for (var defaultKey in parent._defaults) {
          if (parent._defaults.hasOwnProperty(defaultKey)) {
            self._defaults[defaultKey] = parent._defaults[defaultKey];
          }
        }
      }
    });
  };
  util.inherits(ArgumentParser, ActionContainer);
  ArgumentParser.prototype.addSubparsers = function(options) {
    if (!!this._subparsers) {
      this.error('Cannot have multiple subparser arguments.');
    }
    options = options || {};
    options.debug = (this.debug === true);
    options.optionStrings = [];
    options.parserClass = (options.parserClass || ArgumentParser);
    if (!!options.title || !!options.description) {
      this._subparsers = this.addArgumentGroup({
        title: (options.title || 'subcommands'),
        description: options.description
      });
      delete options.title;
      delete options.description;
    } else {
      this._subparsers = this._positionals;
    }
    if (!options.prog) {
      var formatter = this._getFormatter();
      var positionals = this._getPositionalActions();
      var groups = this._mutuallyExclusiveGroups;
      formatter.addUsage(this.usage, positionals, groups, '');
      options.prog = _.str.strip(formatter.formatHelp());
    }
    var ParsersClass = this._popActionClass(options, 'parsers');
    var action = new ParsersClass(options);
    this._subparsers._addAction(action);
    return action;
  };
  ArgumentParser.prototype._addAction = function(action) {
    if (action.isOptional()) {
      this._optionals._addAction(action);
    } else {
      this._positionals._addAction(action);
    }
    return action;
  };
  ArgumentParser.prototype._getOptionalActions = function() {
    return this._actions.filter(function(action) {
      return action.isOptional();
    });
  };
  ArgumentParser.prototype._getPositionalActions = function() {
    return this._actions.filter(function(action) {
      return action.isPositional();
    });
  };
  ArgumentParser.prototype.parseArgs = function(args, namespace) {
    var argv;
    var result = this.parseKnownArgs(args, namespace);
    args = result[0];
    argv = result[1];
    if (argv && argv.length > 0) {
      this.error(format('Unrecognized arguments: %s.', argv.join(' ')));
    }
    return args;
  };
  ArgumentParser.prototype.parseKnownArgs = function(args, namespace) {
    var self = this;
    args = args || process.argv.slice(2);
    namespace = namespace || new Namespace();
    self._actions.forEach(function(action) {
      if (action.dest !== $$.SUPPRESS) {
        if (!_.has(namespace, action.dest)) {
          if (action.defaultValue !== $$.SUPPRESS) {
            var defaultValue = action.defaultValue;
            if (_.isString(action.defaultValue)) {
              defaultValue = self._getValue(action, defaultValue);
            }
            namespace[action.dest] = defaultValue;
          }
        }
      }
    });
    _.keys(self._defaults).forEach(function(dest) {
      namespace[dest] = self._defaults[dest];
    });
    try {
      var res = this._parseKnownArgs(args, namespace);
      namespace = res[0];
      args = res[1];
      if (_.has(namespace, $$._UNRECOGNIZED_ARGS_ATTR)) {
        args = _.union(args, namespace[$$._UNRECOGNIZED_ARGS_ATTR]);
        delete namespace[$$._UNRECOGNIZED_ARGS_ATTR];
      }
      return [namespace, args];
    } catch (e) {
      this.error(e);
    }
  };
  ArgumentParser.prototype._parseKnownArgs = function(argStrings, namespace) {
    var self = this;
    var extras = [];
    if (this.fromfilePrefixChars !== null) {
      argStrings = this._readArgsFromFiles(argStrings);
    }
    function actionHash(action) {
      return action.getName();
    }
    var conflicts,
        key;
    var actionConflicts = {};
    this._mutuallyExclusiveGroups.forEach(function(mutexGroup) {
      mutexGroup._groupActions.forEach(function(mutexAction, i, groupActions) {
        key = actionHash(mutexAction);
        if (!_.has(actionConflicts, key)) {
          actionConflicts[key] = [];
        }
        conflicts = actionConflicts[key];
        conflicts.push.apply(conflicts, groupActions.slice(0, i));
        conflicts.push.apply(conflicts, groupActions.slice(i + 1));
      });
    });
    var optionStringIndices = {};
    var argStringPatternParts = [];
    argStrings.forEach(function(argString, argStringIndex) {
      if (argString === '--') {
        argStringPatternParts.push('-');
        while (argStringIndex < argStrings.length) {
          argStringPatternParts.push('A');
          argStringIndex++;
        }
      } else {
        var pattern;
        var optionTuple = self._parseOptional(argString);
        if (!optionTuple) {
          pattern = 'A';
        } else {
          optionStringIndices[argStringIndex] = optionTuple;
          pattern = 'O';
        }
        argStringPatternParts.push(pattern);
      }
    });
    var argStringsPattern = argStringPatternParts.join('');
    var seenActions = [];
    var seenNonDefaultActions = [];
    function takeAction(action, argumentStrings, optionString) {
      seenActions.push(action);
      var argumentValues = self._getValues(action, argumentStrings);
      if (argumentValues !== action.defaultValue) {
        seenNonDefaultActions.push(action);
        if (!!actionConflicts[actionHash(action)]) {
          actionConflicts[actionHash(action)].forEach(function(actionConflict) {
            if (seenNonDefaultActions.indexOf(actionConflict) >= 0) {
              throw argumentErrorHelper(action, format('Not allowed with argument "%s".', actionConflict.getName()));
            }
          });
        }
      }
      if (argumentValues !== $$.SUPPRESS) {
        action.call(self, namespace, argumentValues, optionString);
      }
    }
    function consumeOptional(startIndex) {
      var optionTuple = optionStringIndices[startIndex];
      var action = optionTuple[0];
      var optionString = optionTuple[1];
      var explicitArg = optionTuple[2];
      var actionTuples = [];
      var args,
          argCount,
          start,
          stop;
      while (true) {
        if (!action) {
          extras.push(argStrings[startIndex]);
          return startIndex + 1;
        }
        if (!!explicitArg) {
          argCount = self._matchArgument(action, 'A');
          var chars = self.prefixChars;
          if (argCount === 0 && chars.indexOf(optionString[1]) < 0) {
            actionTuples.push([action, [], optionString]);
            optionString = optionString[0] + explicitArg[0];
            var newExplicitArg = explicitArg.slice(1) || null;
            var optionalsMap = self._optionStringActions;
            if (_.keys(optionalsMap).indexOf(optionString) >= 0) {
              action = optionalsMap[optionString];
              explicitArg = newExplicitArg;
            } else {
              var msg = 'ignored explicit argument %r';
              throw argumentErrorHelper(action, msg);
            }
          } else if (argCount === 1) {
            stop = startIndex + 1;
            args = [explicitArg];
            actionTuples.push([action, args, optionString]);
            break;
          } else {
            var message = 'ignored explicit argument %r';
            throw argumentErrorHelper(action, _.str.sprintf(message, explicitArg));
          }
        } else {
          start = startIndex + 1;
          var selectedPatterns = argStringsPattern.substr(start);
          argCount = self._matchArgument(action, selectedPatterns);
          stop = start + argCount;
          args = argStrings.slice(start, stop);
          actionTuples.push([action, args, optionString]);
          break;
        }
      }
      if (actionTuples.length < 1) {
        throw new Error('length should be > 0');
      }
      for (var i = 0; i < actionTuples.length; i++) {
        takeAction.apply(self, actionTuples[i]);
      }
      return stop;
    }
    var positionals = self._getPositionalActions();
    function consumePositionals(startIndex) {
      var selectedPattern = argStringsPattern.substr(startIndex);
      var argCounts = self._matchArgumentsPartial(positionals, selectedPattern);
      _.zip(positionals, argCounts).forEach(function(item) {
        var action = item[0];
        var argCount = item[1];
        if (argCount === undefined) {
          return;
        }
        var args = argStrings.slice(startIndex, startIndex + argCount);
        startIndex += argCount;
        takeAction(action, args);
      });
      positionals = positionals.slice(argCounts.length);
      return startIndex;
    }
    var startIndex = 0;
    var position;
    var maxOptionStringIndex = -1;
    Object.keys(optionStringIndices).forEach(function(position) {
      maxOptionStringIndex = Math.max(maxOptionStringIndex, parseInt(position, 10));
    });
    var positionalsEndIndex,
        nextOptionStringIndex;
    while (startIndex <= maxOptionStringIndex) {
      nextOptionStringIndex = null;
      for (position in optionStringIndices) {
        if (!optionStringIndices.hasOwnProperty(position)) {
          continue;
        }
        position = parseInt(position, 10);
        if (position >= startIndex) {
          if (nextOptionStringIndex !== null) {
            nextOptionStringIndex = Math.min(nextOptionStringIndex, position);
          } else {
            nextOptionStringIndex = position;
          }
        }
      }
      if (startIndex !== nextOptionStringIndex) {
        positionalsEndIndex = consumePositionals(startIndex);
        if (positionalsEndIndex > startIndex) {
          startIndex = positionalsEndIndex;
          continue;
        } else {
          startIndex = positionalsEndIndex;
        }
      }
      if (!optionStringIndices[startIndex]) {
        var strings = argStrings.slice(startIndex, nextOptionStringIndex);
        extras = extras.concat(strings);
        startIndex = nextOptionStringIndex;
      }
      startIndex = consumeOptional(startIndex);
    }
    var stopIndex = consumePositionals(startIndex);
    extras = extras.concat(_.rest(argStrings, stopIndex));
    if (positionals.length > 0) {
      self.error('too few arguments');
    }
    self._actions.forEach(function(action) {
      if (action.required) {
        if (_.indexOf(seenActions, action) < 0) {
          self.error(format('Argument "%s" is required', action.getName()));
        }
      }
    });
    var actionUsed = false;
    self._mutuallyExclusiveGroups.forEach(function(group) {
      if (group.required) {
        actionUsed = _.any(group._groupActions, function(action) {
          return _.contains(seenNonDefaultActions, action);
        });
        if (!actionUsed) {
          var names = [];
          group._groupActions.forEach(function(action) {
            if (action.help !== $$.SUPPRESS) {
              names.push(action.getName());
            }
          });
          names = names.join(' ');
          var msg = 'one of the arguments ' + names + ' is required';
          self.error(msg);
        }
      }
    });
    return [namespace, extras];
  };
  ArgumentParser.prototype._readArgsFromFiles = function(argStrings) {
    var _this = this;
    var fs = require("fs");
    var newArgStrings = [];
    argStrings.forEach(function(argString) {
      if (_this.fromfilePrefixChars.indexOf(argString[0]) < 0) {
        newArgStrings.push(argString);
      } else {
        try {
          var argstrs = [];
          var filename = argString.slice(1);
          var content = fs.readFileSync(filename, 'utf8');
          content = content.trim().split('\n');
          content.forEach(function(argLine) {
            _this.convertArgLineToArgs(argLine).forEach(function(arg) {
              argstrs.push(arg);
            });
            argstrs = _this._readArgsFromFiles(argstrs);
          });
          newArgStrings.push.apply(newArgStrings, argstrs);
        } catch (error) {
          return _this.error(error.message);
        }
      }
    });
    return newArgStrings;
  };
  ArgumentParser.prototype.convertArgLineToArgs = function(argLine) {
    return [argLine];
  };
  ArgumentParser.prototype._matchArgument = function(action, regexpArgStrings) {
    var regexpNargs = new RegExp('^' + this._getNargsPattern(action));
    var matches = regexpArgStrings.match(regexpNargs);
    var message;
    if (!matches) {
      switch (action.nargs) {
        case undefined:
        case null:
          message = 'Expected one argument.';
          break;
        case $$.OPTIONAL:
          message = 'Expected at most one argument.';
          break;
        case $$.ONE_OR_MORE:
          message = 'Expected at least one argument.';
          break;
        default:
          message = 'Expected %s argument(s)';
      }
      throw argumentErrorHelper(action, format(message, action.nargs));
    }
    return matches[1].length;
  };
  ArgumentParser.prototype._matchArgumentsPartial = function(actions, regexpArgStrings) {
    var self = this;
    var result = [];
    var actionSlice,
        pattern,
        matches;
    var i,
        j;
    var getLength = function(string) {
      return string.length;
    };
    for (i = actions.length; i > 0; i--) {
      pattern = '';
      actionSlice = actions.slice(0, i);
      for (j = 0; j < actionSlice.length; j++) {
        pattern += self._getNargsPattern(actionSlice[j]);
      }
      pattern = new RegExp('^' + pattern);
      matches = regexpArgStrings.match(pattern);
      if (matches && matches.length > 0) {
        matches = matches.splice(1);
        result = result.concat(matches.map(getLength));
        break;
      }
    }
    return result;
  };
  ArgumentParser.prototype._parseOptional = function(argString) {
    var action,
        optionString,
        argExplicit,
        optionTuples;
    if (!argString) {
      return null;
    }
    if (this.prefixChars.indexOf(argString[0]) < 0) {
      return null;
    }
    if (!!this._optionStringActions[argString]) {
      return [this._optionStringActions[argString], argString, null];
    }
    if (argString.length === 1) {
      return null;
    }
    if (argString.indexOf('=') >= 0) {
      var argStringSplit = argString.split('=');
      optionString = argStringSplit[0];
      argExplicit = argStringSplit[1];
      if (!!this._optionStringActions[optionString]) {
        action = this._optionStringActions[optionString];
        return [action, optionString, argExplicit];
      }
    }
    optionTuples = this._getOptionTuples(argString);
    if (optionTuples.length > 1) {
      var optionStrings = optionTuples.map(function(optionTuple) {
        return optionTuple[1];
      });
      this.error(format('Ambiguous option: "%s" could match %s.', argString, optionStrings.join(', ')));
    } else if (optionTuples.length === 1) {
      return optionTuples[0];
    }
    if (argString.match(this._regexpNegativeNumber)) {
      if (!_.any(this._hasNegativeNumberOptionals)) {
        return null;
      }
    }
    if (argString.search(' ') >= 0) {
      return null;
    }
    return [null, argString, null];
  };
  ArgumentParser.prototype._getOptionTuples = function(optionString) {
    var result = [];
    var chars = this.prefixChars;
    var optionPrefix;
    var argExplicit;
    var action;
    var actionOptionString;
    if (chars.indexOf(optionString[0]) >= 0 && chars.indexOf(optionString[1]) >= 0) {
      if (optionString.indexOf('=') >= 0) {
        var optionStringSplit = optionString.split('=', 1);
        optionPrefix = optionStringSplit[0];
        argExplicit = optionStringSplit[1];
      } else {
        optionPrefix = optionString;
        argExplicit = null;
      }
      for (actionOptionString in this._optionStringActions) {
        if (actionOptionString.substr(0, optionPrefix.length) === optionPrefix) {
          action = this._optionStringActions[actionOptionString];
          result.push([action, actionOptionString, argExplicit]);
        }
      }
    } else if (chars.indexOf(optionString[0]) >= 0 && chars.indexOf(optionString[1]) < 0) {
      optionPrefix = optionString;
      argExplicit = null;
      var optionPrefixShort = optionString.substr(0, 2);
      var argExplicitShort = optionString.substr(2);
      for (actionOptionString in this._optionStringActions) {
        action = this._optionStringActions[actionOptionString];
        if (actionOptionString === optionPrefixShort) {
          result.push([action, actionOptionString, argExplicitShort]);
        } else if (actionOptionString.substr(0, optionPrefix.length) === optionPrefix) {
          result.push([action, actionOptionString, argExplicit]);
        }
      }
    } else {
      throw new Error(format('Unexpected option string: %s.', optionString));
    }
    return result;
  };
  ArgumentParser.prototype._getNargsPattern = function(action) {
    var regexpNargs;
    switch (action.nargs) {
      case undefined:
      case null:
        regexpNargs = '(-*A-*)';
        break;
      case $$.OPTIONAL:
        regexpNargs = '(-*A?-*)';
        break;
      case $$.ZERO_OR_MORE:
        regexpNargs = '(-*[A-]*)';
        break;
      case $$.ONE_OR_MORE:
        regexpNargs = '(-*A[A-]*)';
        break;
      case $$.REMAINDER:
        regexpNargs = '([-AO]*)';
        break;
      case $$.PARSER:
        regexpNargs = '(-*A[-AO]*)';
        break;
      default:
        regexpNargs = '(-*' + _.str.repeat('-*A', action.nargs) + '-*)';
    }
    if (action.isOptional()) {
      regexpNargs = regexpNargs.replace(/-\*/g, '');
      regexpNargs = regexpNargs.replace(/-/g, '');
    }
    return regexpNargs;
  };
  ArgumentParser.prototype._getValues = function(action, argStrings) {
    var self = this;
    if (action.nargs !== $$.PARSER && action.nargs !== $$.REMAINDER) {
      argStrings = argStrings.filter(function(arrayElement) {
        return arrayElement !== '--';
      });
    }
    var value,
        argString;
    if (argStrings.length === 0 && action.nargs === $$.OPTIONAL) {
      value = (action.isOptional()) ? action.constant : action.defaultValue;
      if (typeof(value) === 'string') {
        value = this._getValue(action, value);
        this._checkValue(action, value);
      }
    } else if (argStrings.length === 0 && action.nargs === $$.ZERO_OR_MORE && action.optionStrings.length === 0) {
      value = (action.defaultValue || argStrings);
      this._checkValue(action, value);
    } else if (argStrings.length === 1 && (!action.nargs || action.nargs === $$.OPTIONAL)) {
      argString = argStrings[0];
      value = this._getValue(action, argString);
      this._checkValue(action, value);
    } else if (action.nargs === $$.REMAINDER) {
      value = argStrings.map(function(v) {
        return self._getValue(action, v);
      });
    } else if (action.nargs === $$.PARSER) {
      value = argStrings.map(function(v) {
        return self._getValue(action, v);
      });
      this._checkValue(action, value[0]);
    } else {
      value = argStrings.map(function(v) {
        return self._getValue(action, v);
      });
      value.forEach(function(v) {
        self._checkValue(action, v);
      });
    }
    return value;
  };
  ArgumentParser.prototype._getValue = function(action, argString) {
    var result;
    var typeFunction = this._registryGet('type', action.type, action.type);
    if (!_.isFunction(typeFunction)) {
      var message = format('%s is not callable', typeFunction);
      throw argumentErrorHelper(action, message);
    }
    try {
      result = typeFunction(argString);
    } catch (e) {
      var name = null;
      if (_.isString(action.type)) {
        name = action.type;
      } else {
        name = action.type.name || action.type.displayName || '<function>';
      }
      var msg = format('Invalid %s value: %s', name, argString);
      if (name === '<function>') {
        msg += '\n' + e.message;
      }
      throw argumentErrorHelper(action, msg);
    }
    return result;
  };
  ArgumentParser.prototype._checkValue = function(action, value) {
    var choices = action.choices;
    if (!!choices) {
      if ((_.isString(choices) || _.isArray(choices)) && choices.indexOf(value) !== -1) {
        return;
      }
      if (_.isObject(choices) && !_.isArray(choices) && choices[value]) {
        return;
      }
      if (_.isString(choices)) {
        choices = choices.split('').join(', ');
      } else if (_.isArray(choices)) {
        choices = choices.join(', ');
      } else {
        choices = _.keys(choices).join(', ');
      }
      var message = format('Invalid choice: %s (choose from [%s])', value, choices);
      throw argumentErrorHelper(action, message);
    }
  };
  ArgumentParser.prototype.formatUsage = function() {
    var formatter = this._getFormatter();
    formatter.addUsage(this.usage, this._actions, this._mutuallyExclusiveGroups);
    return formatter.formatHelp();
  };
  ArgumentParser.prototype.formatHelp = function() {
    var formatter = this._getFormatter();
    formatter.addUsage(this.usage, this._actions, this._mutuallyExclusiveGroups);
    formatter.addText(this.description);
    this._actionGroups.forEach(function(actionGroup) {
      formatter.startSection(actionGroup.title);
      formatter.addText(actionGroup.description);
      formatter.addArguments(actionGroup._groupActions);
      formatter.endSection();
    });
    formatter.addText(this.epilog);
    return formatter.formatHelp();
  };
  ArgumentParser.prototype._getFormatter = function() {
    var FormatterClass = this.formatterClass;
    var formatter = new FormatterClass({prog: this.prog});
    return formatter;
  };
  ArgumentParser.prototype.printUsage = function() {
    this._printMessage(this.formatUsage());
  };
  ArgumentParser.prototype.printHelp = function() {
    this._printMessage(this.formatHelp());
  };
  ArgumentParser.prototype._printMessage = function(message, stream) {
    if (!stream) {
      stream = process.stdout;
    }
    if (message) {
      stream.write('' + message);
    }
  };
  ArgumentParser.prototype.exit = function(status, message) {
    if (!!message) {
      if (status === 0) {
        this._printMessage(message);
      } else {
        this._printMessage(message, process.stderr);
      }
    }
    process.exit(status);
  };
  ArgumentParser.prototype.error = function(err) {
    var message;
    if (err instanceof Error) {
      if (this.debug === true) {
        throw err;
      }
      message = err.message;
    } else {
      message = err;
    }
    var msg = format('%s: error: %s', this.prog, message) + $$.EOL;
    if (this.debug === true) {
      throw new Error(msg);
    }
    this.printUsage(process.stderr);
    return this.exit(2, msg);
  };
})(require("process"));
