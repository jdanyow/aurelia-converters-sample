System.register(['numeral'], function (_export) {
  'use strict';

  var numeral, CurrencyFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      CurrencyFormatValueConverter = (function () {
        function CurrencyFormatValueConverter() {
          _classCallCheck(this, CurrencyFormatValueConverter);
        }

        _createClass(CurrencyFormatValueConverter, [{
          key: 'toView',
          value: function toView(value) {
            return numeral(value).format('($0,0.00)');
          }
        }]);

        return CurrencyFormatValueConverter;
      })();

      _export('CurrencyFormatValueConverter', CurrencyFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzMvY3VycmVuY3ktZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztlQUVhLDRCQUE0Qjs7Ozs7Ozs7Ozs7QUFBNUIsa0NBQTRCO2lCQUE1Qiw0QkFBNEI7Z0NBQTVCLDRCQUE0Qjs7O3FCQUE1Qiw0QkFBNEI7O2lCQUNqQyxnQkFBQyxLQUFLLEVBQUU7QUFDWixtQkFBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1dBQzNDOzs7ZUFIVSw0QkFBNEI7Ozs4Q0FBNUIsNEJBQTRCIiwiZmlsZSI6ImV4YW1wbGVzLzMvY3VycmVuY3ktZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG51bWVyYWwgZnJvbSAnbnVtZXJhbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XHJcbiAgdG9WaWV3KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gbnVtZXJhbCh2YWx1ZSkuZm9ybWF0KCcoJDAsMC4wMCknKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9