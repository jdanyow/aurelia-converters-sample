System.register(['numeral'], function (_export) {
  var numeral, _classCallCheck, _createClass, NumberFormatValueConverter;

  return {
    setters: [function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzUvbnVtYmVyLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzhDQUVhLDBCQUEwQjs7Ozs7Ozs7Ozs7OztBQUExQixnQ0FBMEI7aUJBQTFCLDBCQUEwQjtnQ0FBMUIsMEJBQTBCOzs7cUJBQTFCLDBCQUEwQjs7aUJBQy9CLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsbUJBQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUN0Qzs7O2VBSFUsMEJBQTBCOzs7NENBQTFCLDBCQUEwQiIsImZpbGUiOiJleGFtcGxlcy81L251bWJlci1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9