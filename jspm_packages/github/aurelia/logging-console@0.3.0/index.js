/* */ 
System.register([], function (_export) {
  var _classCallCheck, _createClass, ConsoleAppender;

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      (function (global) {
        'use strict';
        global.console = global.console || {};
        var con = global.console;
        var prop, method;
        var empty = {};
        var dummy = function dummy() {};
        var properties = 'memory'.split(',');
        var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
        while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
        while (method = methods.pop()) if (!con[method]) con[method] = dummy;
      })(typeof window === 'undefined' ? undefined : window);

      ConsoleAppender = (function () {
        function ConsoleAppender() {
          _classCallCheck(this, ConsoleAppender);
        }

        _createClass(ConsoleAppender, [{
          key: 'debug',
          value: function debug(logger, message) {
            for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              rest[_key - 2] = arguments[_key];
            }

            console.debug.apply(console, ['DEBUG [' + logger.id + '] ' + message].concat(rest));
          }
        }, {
          key: 'info',
          value: function info(logger, message) {
            for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              rest[_key2 - 2] = arguments[_key2];
            }

            console.info.apply(console, ['INFO [' + logger.id + '] ' + message].concat(rest));
          }
        }, {
          key: 'warn',
          value: function warn(logger, message) {
            for (var _len3 = arguments.length, rest = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
              rest[_key3 - 2] = arguments[_key3];
            }

            console.warn.apply(console, ['WARN [' + logger.id + '] ' + message].concat(rest));
          }
        }, {
          key: 'error',
          value: function error(logger, message) {
            for (var _len4 = arguments.length, rest = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
              rest[_key4 - 2] = arguments[_key4];
            }

            console.error.apply(console, ['ERROR [' + logger.id + '] ' + message].concat(rest));
          }
        }]);

        return ConsoleAppender;
      })();

      _export('ConsoleAppender', ConsoleAppender);
    }
  };
});