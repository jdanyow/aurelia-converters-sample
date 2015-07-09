System.register(['numeral'], function (_export) {
  'use strict';

  var numeral, NumberFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      NumberFormatValueConverter = (function () {
        function NumberFormatValueConverter() {
          _classCallCheck(this, NumberFormatValueConverter);
        }

        _createClass(NumberFormatValueConverter, [{
          key: 'toView',
          value: function toView(value, format) {
            return numeral(value).format(format);
          }
        }]);

        return NumberFormatValueConverter;
      })();

      _export('NumberFormatValueConverter', NumberFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzkvcmVzb3VyY2VzL251bWJlci1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2VBRWEsMEJBQTBCOzs7Ozs7Ozs7OztBQUExQixnQ0FBMEI7aUJBQTFCLDBCQUEwQjtnQ0FBMUIsMEJBQTBCOzs7cUJBQTFCLDBCQUEwQjs7aUJBQy9CLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsbUJBQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUN0Qzs7O2VBSFUsMEJBQTBCOzs7NENBQTFCLDBCQUEwQiIsImZpbGUiOiJleGFtcGxlcy85L3Jlc291cmNlcy9udW1iZXItZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTnVtYmVyRm9ybWF0VmFsdWVDb252ZXJ0ZXIge1xyXG4gIHRvVmlldyh2YWx1ZSwgZm9ybWF0KSB7XHJcbiAgICByZXR1cm4gbnVtZXJhbCh2YWx1ZSkuZm9ybWF0KGZvcm1hdCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==