System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, TakeValueConverter;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      TakeValueConverter = _export("TakeValueConverter", (function () {
        function TakeValueConverter() {
          _classCallCheck(this, TakeValueConverter);
        }

        _prototypeProperties(TakeValueConverter, null, {
          toView: {
            value: function toView(array, count) {
              return array.slice(0, count);
            },
            writable: true,
            configurable: true
          }
        });

        return TakeValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzYvdGFrZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsa0JBQWtCOzs7Ozs7OztBQUFsQix3QkFBa0I7aUJBQWxCLGtCQUFrQjtnQ0FBbEIsa0JBQWtCOzs7NkJBQWxCLGtCQUFrQjtBQUM3QixnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ25CLHFCQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzlCOzs7Ozs7ZUFIVSxrQkFBa0IiLCJmaWxlIjoiZXhhbXBsZXMvNi90YWtlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=