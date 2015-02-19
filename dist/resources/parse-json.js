System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, ParseJavascriptLiteralValueConverter;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      ParseJavascriptLiteralValueConverter = _export("ParseJavascriptLiteralValueConverter", (function () {
        function ParseJavascriptLiteralValueConverter() {
          _classCallCheck(this, ParseJavascriptLiteralValueConverter);
        }

        _prototypeProperties(ParseJavascriptLiteralValueConverter, null, {
          toView: {
            value: function toView(value) {
              var x;
              if (value) {
                eval("x=" + value);
                return x;
              }
              return value;
            },
            writable: true,
            configurable: true
          }
        });

        return ParseJavascriptLiteralValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9wYXJzZS1qc29uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBYSxvQ0FBb0M7Ozs7Ozs7O0FBQXBDLDBDQUFvQztpQkFBcEMsb0NBQW9DO2dDQUFwQyxvQ0FBb0M7Ozs2QkFBcEMsb0NBQW9DO0FBQy9DLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRTtBQUNaLGtCQUFJLENBQUMsQ0FBQztBQUNOLGtCQUFJLEtBQUssRUFBRTtBQUNULG9CQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ25CLHVCQUFPLENBQUMsQ0FBQztlQUNWO0FBQ0QscUJBQU8sS0FBSyxDQUFDO2FBQ2Q7Ozs7OztlQVJVLG9DQUFvQyIsImZpbGUiOiJyZXNvdXJjZXMvcGFyc2UtanNvbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9