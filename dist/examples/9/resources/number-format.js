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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzkvcmVzb3VyY2VzL251bWJlci1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs4Q0FFYSwwQkFBMEI7Ozs7Ozs7Ozs7Ozs7QUFBMUIsZ0NBQTBCO2lCQUExQiwwQkFBMEI7Z0NBQTFCLDBCQUEwQjs7O3FCQUExQiwwQkFBMEI7O2lCQUMvQixnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLG1CQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDdEM7OztlQUhVLDBCQUEwQjs7OzRDQUExQiwwQkFBMEIiLCJmaWxlIjoiZXhhbXBsZXMvOS9yZXNvdXJjZXMvbnVtYmVyLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=