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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzUvbnVtYmVyLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBTyxPQUFPLHlDQUVELDBCQUEwQjs7O0FBRmhDLGFBQU87Ozs7Ozs7QUFFRCxnQ0FBMEI7aUJBQTFCLDBCQUEwQjtnQ0FBMUIsMEJBQTBCOzs7NkJBQTFCLDBCQUEwQjtBQUNyQyxnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLHFCQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEM7Ozs7OztlQUhVLDBCQUEwQiIsImZpbGUiOiJleGFtcGxlcy81L251bWJlci1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==