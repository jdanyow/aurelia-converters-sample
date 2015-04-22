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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzcvc29ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FDQUFhLGtCQUFrQjs7Ozs7Ozs7Ozs7QUFBbEIsd0JBQWtCO2lCQUFsQixrQkFBa0I7Z0NBQWxCLGtCQUFrQjs7O3FCQUFsQixrQkFBa0I7O2lCQUN2QixnQkFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLGdCQUFJLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksV0FBVyxDQUFBLEtBQU0sV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4RSxtQkFBTyxLQUFLLENBQ1QsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNSLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDZCxxQkFBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQSxHQUFJLE1BQU0sQ0FBQTthQUNsRSxDQUFDLENBQUM7V0FDTjs7O2VBUlUsa0JBQWtCOzs7b0NBQWxCLGtCQUFrQiIsImZpbGUiOiJleGFtcGxlcy83L3NvcnQuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9