System.register(["numeral"], function (_export) {
  "use strict";

  var numeral, _prototypeProperties, _classCallCheck, CurrencyFormatValueConverter;
  return {
    setters: [function (_numeral) {
      numeral = _numeral["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CurrencyFormatValueConverter = _export("CurrencyFormatValueConverter", (function () {
        function CurrencyFormatValueConverter() {
          _classCallCheck(this, CurrencyFormatValueConverter);
        }

        _prototypeProperties(CurrencyFormatValueConverter, null, {
          toView: {
            value: function toView(value) {
              return numeral(value).format("($0,0.00)");
            },
            writable: true,
            configurable: true
          }
        });

        return CurrencyFormatValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzMvY3VycmVuY3ktZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFPLE9BQU8seUNBRUQsNEJBQTRCOzs7QUFGbEMsYUFBTzs7Ozs7OztBQUVELGtDQUE0QjtpQkFBNUIsNEJBQTRCO2dDQUE1Qiw0QkFBNEI7Ozs2QkFBNUIsNEJBQTRCO0FBQ3ZDLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRTtBQUNaLHFCQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDM0M7Ozs7OztlQUhVLDRCQUE0QiIsImZpbGUiOiJleGFtcGxlcy8zL2N1cnJlbmN5LWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9