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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNS9udW1iZXItZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFPLE9BQU8seUNBRUQsMEJBQTBCOzs7QUFGaEMsYUFBTzs7Ozs7OztBQUVELGdDQUEwQjtpQkFBMUIsMEJBQTBCO2dDQUExQiwwQkFBMEI7Ozs2QkFBMUIsMEJBQTBCO0FBQ3JDLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIscUJBQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0Qzs7Ozs7O2VBSFUsMEJBQTBCIiwiZmlsZSI6InNhbXBsZXMvNS9udW1iZXItZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=