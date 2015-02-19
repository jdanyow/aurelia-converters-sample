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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNi90YWtlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBYSxrQkFBa0I7Ozs7Ozs7O0FBQWxCLHdCQUFrQjtpQkFBbEIsa0JBQWtCO2dDQUFsQixrQkFBa0I7Ozs2QkFBbEIsa0JBQWtCO0FBQzdCLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDbkIscUJBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDOUI7Ozs7OztlQUhVLGtCQUFrQiIsImZpbGUiOiJzYW1wbGVzLzYvdGFrZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9