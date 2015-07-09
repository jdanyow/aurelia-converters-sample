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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzYvc29ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxrQkFBa0I7Ozs7Ozs7OztBQUFsQix3QkFBa0I7aUJBQWxCLGtCQUFrQjtnQ0FBbEIsa0JBQWtCOzs7cUJBQWxCLGtCQUFrQjs7aUJBQ3ZCLGdCQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFO0FBQ3JDLGdCQUFJLE1BQU0sR0FBRyxTQUFTLEtBQUssV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCxtQkFBTyxLQUFLLENBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNSLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDZCxxQkFBTyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUEsR0FBSSxNQUFNLENBQUE7YUFDcEQsQ0FBQyxDQUFDO1dBQ047OztlQVJVLGtCQUFrQjs7O29DQUFsQixrQkFBa0IiLCJmaWxlIjoiZXhhbXBsZXMvNi9zb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNvcnRWYWx1ZUNvbnZlcnRlciB7XHJcbiAgdG9WaWV3KGFycmF5LCBwcm9wZXJ0eU5hbWUsIGRpcmVjdGlvbikge1xyXG4gICAgdmFyIGZhY3RvciA9IGRpcmVjdGlvbiA9PT0gJ2FzY2VuZGluZycgPyAxIDogLTE7XHJcbiAgICByZXR1cm4gYXJyYXlcclxuICAgICAgLnNsaWNlKDApXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChhW3Byb3BlcnR5TmFtZV0gLSBiW3Byb3BlcnR5TmFtZV0pICogZmFjdG9yXHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=