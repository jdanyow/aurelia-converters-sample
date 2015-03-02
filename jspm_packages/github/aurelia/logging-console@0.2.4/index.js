/* */ 
System.register([], function (_export) {
  var _prototypeProperties, _classCallCheck, ConsoleAppender;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ConsoleAppender = _export("ConsoleAppender", (function () {
        function ConsoleAppender() {
          _classCallCheck(this, ConsoleAppender);
        }

        _prototypeProperties(ConsoleAppender, null, {
          debug: {
            value: function debug(logger, message) {
              for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                rest[_key - 2] = arguments[_key];
              }

              console.debug.apply(console, ["DEBUG [" + logger.id + "] " + message].concat(rest));
            },
            writable: true,
            configurable: true
          },
          info: {
            value: function info(logger, message) {
              for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                rest[_key - 2] = arguments[_key];
              }

              console.info.apply(console, ["INFO [" + logger.id + "] " + message].concat(rest));
            },
            writable: true,
            configurable: true
          },
          warn: {
            value: function warn(logger, message) {
              for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                rest[_key - 2] = arguments[_key];
              }

              console.warn.apply(console, ["WARN [" + logger.id + "] " + message].concat(rest));
            },
            writable: true,
            configurable: true
          },
          error: {
            value: function error(logger, message) {
              for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                rest[_key - 2] = arguments[_key];
              }

              console.error.apply(console, ["ERROR [" + logger.id + "] " + message].concat(rest));
            },
            writable: true,
            configurable: true
          }
        });

        return ConsoleAppender;
      })());
    }
  };
});