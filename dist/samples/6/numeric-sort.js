System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, NumericSortValueConverter;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NumericSortValueConverter = _export("NumericSortValueConverter", (function () {
        function NumericSortValueConverter() {
          _classCallCheck(this, NumericSortValueConverter);
        }

        _prototypeProperties(NumericSortValueConverter, null, {
          toView: {
            value: function toView(array, propertyName, direction) {
              var factor = direction === "ascending" ? 1 : -1;
              return array.sort(function (a, b) {
                return (a[propertyName] - b[propertyName]) * factor;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return NumericSortValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNi9udW1lcmljLXNvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzZDQUFhLHlCQUF5Qjs7Ozs7Ozs7QUFBekIsK0JBQXlCO2lCQUF6Qix5QkFBeUI7Z0NBQXpCLHlCQUF5Qjs7OzZCQUF6Qix5QkFBeUI7QUFDcEMsZ0JBQU07bUJBQUEsZ0JBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7QUFDckMsa0JBQUksTUFBTSxHQUFHLFNBQVMsS0FBSyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hELHFCQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQzt1QkFBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUEsR0FBSSxNQUFNO2VBQUEsQ0FBQyxDQUFDO2FBQzNFOzs7Ozs7ZUFKVSx5QkFBeUIiLCJmaWxlIjoic2FtcGxlcy82L251bWVyaWMtc29ydC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9