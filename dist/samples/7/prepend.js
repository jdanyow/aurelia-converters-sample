System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, PrependValueConverter;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      PrependValueConverter = _export("PrependValueConverter", (function () {
        function PrependValueConverter() {
          _classCallCheck(this, PrependValueConverter);
        }

        _prototypeProperties(PrependValueConverter, null, {
          toView: {
            value: function toView(value, toPrepend) {
              return toPrepend + value;
            },
            writable: true,
            configurable: true
          }
        });

        return PrependValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNy9wcmVwZW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBYSxxQkFBcUI7Ozs7Ozs7O0FBQXJCLDJCQUFxQjtpQkFBckIscUJBQXFCO2dDQUFyQixxQkFBcUI7Ozs2QkFBckIscUJBQXFCO0FBQ2hDLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7QUFDdkIscUJBQU8sU0FBUyxHQUFHLEtBQUssQ0FBQzthQUMxQjs7Ozs7O2VBSFUscUJBQXFCIiwiZmlsZSI6InNhbXBsZXMvNy9wcmVwZW5kLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=