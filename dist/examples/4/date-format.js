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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzQvZGF0ZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs2Q0FFYSx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7QUFBeEIsOEJBQXdCO2lCQUF4Qix3QkFBd0I7Z0NBQXhCLHdCQUF3Qjs7O3FCQUF4Qix3QkFBd0I7O2lCQUM3QixnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLG1CQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDckM7OztlQUhVLHdCQUF3Qjs7OzBDQUF4Qix3QkFBd0IiLCJmaWxlIjoiZXhhbXBsZXMvNC9kYXRlLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=