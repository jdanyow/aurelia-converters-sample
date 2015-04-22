/* */ 
System.register([], function (_export) {
  var _classCallCheck, _createClass, levels, loggers, logLevel, appenders, slice, loggerConstructionKey, Logger;

  _export('AggregateError', AggregateError);

  _export('getLogger', getLogger);

  _export('addAppender', addAppender);

  _export('setLevel', setLevel);

  function AggregateError(msg, inner, skipIfAlreadyAggregate) {
    if (inner) {
      if (inner.innerError && skipIfAlreadyAggregate) {
        return inner;
      }

      if (inner.stack) {
        msg += '\n------------------------------------------------\ninner error: ' + inner.stack;
      }
    }

    var err = new Error(msg);
    if (inner) {
      err.innerError = inner;
    }

    return err;
  }

  function log(logger, level, args) {
    var i = appenders.length,
        current;

    args = slice.call(args);
    args.unshift(logger);

    while (i--) {
      current = appenders[i];
      current[level].apply(current, args);
    }
  }

  function debug() {
    if (logLevel < 4) {
      return;
    }

    log(this, 'debug', arguments);
  }

  function info() {
    if (logLevel < 3) {
      return;
    }

    log(this, 'info', arguments);
  }

  function warn() {
    if (logLevel < 2) {
      return;
    }

    log(this, 'warn', arguments);
  }

  function error() {
    if (logLevel < 1) {
      return;
    }

    log(this, 'error', arguments);
  }

  function connectLogger(logger) {
    logger.debug = debug;
    logger.info = info;
    logger.warn = warn;
    logger.error = error;
  }

  function createLogger(id) {
    var logger = new Logger(id, loggerConstructionKey);

    if (appenders.length) {
      connectLogger(logger);
    }

    return logger;
  }

  function getLogger(id) {
    return loggers[id] || (loggers[id] = createLogger(id));
  }

  function addAppender(appender) {
    appenders.push(appender);

    if (appenders.length === 1) {
      for (var key in loggers) {
        connectLogger(loggers[key]);
      }
    }
  }

  function setLevel(level) {
    logLevel = level;
  }

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      levels = {
        none: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4
      };

      _export('levels', levels);

      loggers = {};
      logLevel = levels.none;
      appenders = [];
      slice = Array.prototype.slice;
      loggerConstructionKey = {};

      Logger = (function () {
        function Logger(id, key) {
          _classCallCheck(this, Logger);

          if (key !== loggerConstructionKey) {
            throw new Error('You cannot instantiate "Logger". Use the "getLogger" API instead.');
          }

          this.id = id;
        }

        _createClass(Logger, [{
          key: 'debug',
          value: function debug() {}
        }, {
          key: 'info',
          value: function info() {}
        }, {
          key: 'warn',
          value: function warn() {}
        }, {
          key: 'error',
          value: function error() {}
        }]);

        return Logger;
      })();

      _export('Logger', Logger);
    }
  };
});