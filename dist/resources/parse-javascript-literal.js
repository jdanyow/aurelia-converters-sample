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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9wYXJzZS1qYXZhc2NyaXB0LWxpdGVyYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUVhLG9DQUFvQzs7Ozs7Ozs7QUFBcEMsMENBQW9DO2lCQUFwQyxvQ0FBb0M7Z0NBQXBDLG9DQUFvQzs7OzZCQUFwQyxvQ0FBb0M7QUFDL0MsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFFO0FBQ1osa0JBQUksQ0FBQyxDQUFDO0FBQ04sa0JBQUksS0FBSyxFQUFFO0FBQ1Qsb0JBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7QUFDbkIsdUJBQU8sQ0FBQyxDQUFDO2VBQ1Y7QUFDRCxxQkFBTyxLQUFLLENBQUM7YUFDZDs7Ozs7O2VBUlUsb0NBQW9DIiwiZmlsZSI6InJlc291cmNlcy9wYXJzZS1qYXZhc2NyaXB0LWxpdGVyYWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==