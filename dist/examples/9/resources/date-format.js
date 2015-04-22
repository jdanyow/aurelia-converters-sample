System.register(['moment'], function (_export) {
  var moment, _classCallCheck, _createClass, DateFormatValueConverter;

  return {
    setters: [function (_moment) {
      moment = _moment['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
          _classCallCheck(this, DateFormatValueConverter);
        }

        _createClass(DateFormatValueConverter, [{
          key: 'toView',
          value: function toView(value, format) {
            return moment(value).format(format);
          }
        }]);

        return DateFormatValueConverter;
      })();

      _export('DateFormatValueConverter', DateFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzkvcmVzb3VyY2VzL2RhdGUtZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7NkNBRWEsd0JBQXdCOzs7Ozs7Ozs7Ozs7O0FBQXhCLDhCQUF3QjtpQkFBeEIsd0JBQXdCO2dDQUF4Qix3QkFBd0I7OztxQkFBeEIsd0JBQXdCOztpQkFDN0IsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixtQkFBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQ3JDOzs7ZUFIVSx3QkFBd0I7OzswQ0FBeEIsd0JBQXdCIiwiZmlsZSI6ImV4YW1wbGVzLzkvcmVzb3VyY2VzL2RhdGUtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==