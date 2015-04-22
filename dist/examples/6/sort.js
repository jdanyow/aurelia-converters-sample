System.register([], function (_export) {
  var _classCallCheck, _createClass, SortValueConverter;

  return {
    setters: [],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      SortValueConverter = (function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        _createClass(SortValueConverter, [{
          key: 'toView',
          value: function toView(array, propertyName, direction) {
            var factor = direction === 'ascending' ? 1 : -1;
            return array.slice(0).sort(function (a, b) {
              return (a[propertyName] - b[propertyName]) * factor;
            });
          }
        }]);

        return SortValueConverter;
      })();

      _export('SortValueConverter', SortValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzYvc29ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FDQUFhLGtCQUFrQjs7Ozs7Ozs7Ozs7QUFBbEIsd0JBQWtCO2lCQUFsQixrQkFBa0I7Z0NBQWxCLGtCQUFrQjs7O3FCQUFsQixrQkFBa0I7O2lCQUN2QixnQkFBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRTtBQUNyQyxnQkFBSSxNQUFNLEdBQUcsU0FBUyxLQUFLLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEQsbUJBQU8sS0FBSyxDQUNULEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDUixJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFLO0FBQ2QscUJBQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFBLEdBQUksTUFBTSxDQUFBO2FBQ3BELENBQUMsQ0FBQztXQUNOOzs7ZUFSVSxrQkFBa0I7OztvQ0FBbEIsa0JBQWtCIiwiZmlsZSI6ImV4YW1wbGVzLzYvc29ydC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=