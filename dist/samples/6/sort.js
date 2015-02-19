System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, SortValueConverter;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SortValueConverter = _export("SortValueConverter", (function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        _prototypeProperties(SortValueConverter, null, {
          toView: {
            value: function toView(array, propertyName, direction) {
              var factor = direction === "ascending" ? 1 : -1;
              return array.slice(0).sort(function (a, b) {
                return (a[propertyName] - b[propertyName]) * factor;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return SortValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNi9zb3J0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBYSxrQkFBa0I7Ozs7Ozs7O0FBQWxCLHdCQUFrQjtpQkFBbEIsa0JBQWtCO2dDQUFsQixrQkFBa0I7Ozs2QkFBbEIsa0JBQWtCO0FBQzdCLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFO0FBQ3JDLGtCQUFJLE1BQU0sR0FBRyxTQUFTLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxxQkFBTyxLQUFLLENBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNSLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDZCx1QkFBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUEsR0FBSSxNQUFNLENBQUE7ZUFDcEQsQ0FBQyxDQUFDO2FBQ047Ozs7OztlQVJVLGtCQUFrQiIsImZpbGUiOiJzYW1wbGVzLzYvc29ydC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9