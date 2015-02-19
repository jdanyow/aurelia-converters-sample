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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvMy9jdXJyZW5jeS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQU8sT0FBTyx5Q0FFRCw0QkFBNEI7OztBQUZsQyxhQUFPOzs7Ozs7O0FBRUQsa0NBQTRCO2lCQUE1Qiw0QkFBNEI7Z0NBQTVCLDRCQUE0Qjs7OzZCQUE1Qiw0QkFBNEI7QUFDdkMsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFFO0FBQ1oscUJBQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQzs7Ozs7O2VBSFUsNEJBQTRCIiwiZmlsZSI6InNhbXBsZXMvMy9jdXJyZW5jeS1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==