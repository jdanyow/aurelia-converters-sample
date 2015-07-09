System.register([], function (_export) {
  'use strict';

  var SortValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      SortValueConverter = (function () {
        function SortValueConverter() {
          _classCallCheck(this, SortValueConverter);
        }

        _createClass(SortValueConverter, [{
          key: 'toView',
          value: function toView(array, config) {
            var factor = (config.direction || 'ascending') === 'ascending' ? 1 : -1;
            return array.slice(0).sort(function (a, b) {
              return (a[config.propertyName] - b[config.propertyName]) * factor;
            });
          }
        }]);

        return SortValueConverter;
      })();

      _export('SortValueConverter', SortValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzcvc29ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxrQkFBa0I7Ozs7Ozs7OztBQUFsQix3QkFBa0I7aUJBQWxCLGtCQUFrQjtnQ0FBbEIsa0JBQWtCOzs7cUJBQWxCLGtCQUFrQjs7aUJBQ3ZCLGdCQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDcEIsZ0JBQUksTUFBTSxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSxXQUFXLENBQUEsS0FBTSxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLG1CQUFPLEtBQUssQ0FDVCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1IsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBSztBQUNkLHFCQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFBLEdBQUksTUFBTSxDQUFBO2FBQ2xFLENBQUMsQ0FBQztXQUNOOzs7ZUFSVSxrQkFBa0I7OztvQ0FBbEIsa0JBQWtCIiwiZmlsZSI6ImV4YW1wbGVzLzcvc29ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTb3J0VmFsdWVDb252ZXJ0ZXIge1xyXG4gIHRvVmlldyhhcnJheSwgY29uZmlnKSB7XHJcbiAgICB2YXIgZmFjdG9yID0gKGNvbmZpZy5kaXJlY3Rpb24gfHwgJ2FzY2VuZGluZycpID09PSAnYXNjZW5kaW5nJyA/IDEgOiAtMTtcclxuICAgIHJldHVybiBhcnJheVxyXG4gICAgICAuc2xpY2UoMClcclxuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICByZXR1cm4gKGFbY29uZmlnLnByb3BlcnR5TmFtZV0gLSBiW2NvbmZpZy5wcm9wZXJ0eU5hbWVdKSAqIGZhY3RvclxyXG4gICAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9