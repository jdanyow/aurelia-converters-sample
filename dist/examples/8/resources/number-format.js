System.register(["numeral"], function (_export) {
  "use strict";

  var numeral, _prototypeProperties, _classCallCheck, NumberFormatValueConverter;
  return {
    setters: [function (_numeral) {
      numeral = _numeral["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NumberFormatValueConverter = _export("NumberFormatValueConverter", (function () {
        function NumberFormatValueConverter() {
          _classCallCheck(this, NumberFormatValueConverter);
        }

        _prototypeProperties(NumberFormatValueConverter, null, {
          toView: {
            value: function toView(value, format) {
              return numeral(value).format(format);
            },
            writable: true,
            configurable: true
          }
        });

        return NumberFormatValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzgvcmVzb3VyY2VzL251bWJlci1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQU8sT0FBTyx5Q0FFRCwwQkFBMEI7OztBQUZoQyxhQUFPOzs7Ozs7O0FBRUQsZ0NBQTBCO2lCQUExQiwwQkFBMEI7Z0NBQTFCLDBCQUEwQjs7OzZCQUExQiwwQkFBMEI7QUFDckMsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixxQkFBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RDOzs7Ozs7ZUFIVSwwQkFBMEIiLCJmaWxlIjoiZXhhbXBsZXMvOC9yZXNvdXJjZXMvbnVtYmVyLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9