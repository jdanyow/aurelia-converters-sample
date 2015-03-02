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
            value: function toView(array, config) {
              var factor = (config.direction || "ascending") === "ascending" ? 1 : -1;
              return array.slice(0).sort(function (a, b) {
                return (a[config.propertyName] - b[config.propertyName]) * factor;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzcvc29ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsa0JBQWtCOzs7Ozs7OztBQUFsQix3QkFBa0I7aUJBQWxCLGtCQUFrQjtnQ0FBbEIsa0JBQWtCOzs7NkJBQWxCLGtCQUFrQjtBQUM3QixnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLGtCQUFJLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksV0FBVyxDQUFBLEtBQU0sV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RSxxQkFBTyxLQUFLLENBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNSLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDZCx1QkFBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQSxHQUFJLE1BQU0sQ0FBQTtlQUNsRSxDQUFDLENBQUM7YUFDTjs7Ozs7O2VBUlUsa0JBQWtCIiwiZmlsZSI6ImV4YW1wbGVzLzcvc29ydC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9