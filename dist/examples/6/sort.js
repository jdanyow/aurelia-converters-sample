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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzYvc29ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsa0JBQWtCOzs7Ozs7OztBQUFsQix3QkFBa0I7aUJBQWxCLGtCQUFrQjtnQ0FBbEIsa0JBQWtCOzs7NkJBQWxCLGtCQUFrQjtBQUM3QixnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRTtBQUNyQyxrQkFBSSxNQUFNLEdBQUcsU0FBUyxLQUFLLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEQscUJBQU8sS0FBSyxDQUNULEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDUixJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFLO0FBQ2QsdUJBQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFBLEdBQUksTUFBTSxDQUFBO2VBQ3BELENBQUMsQ0FBQzthQUNOOzs7Ozs7ZUFSVSxrQkFBa0IiLCJmaWxlIjoiZXhhbXBsZXMvNi9zb3J0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=