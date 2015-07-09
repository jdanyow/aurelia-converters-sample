System.register(['numeral'], function (_export) {
  'use strict';

  var numeral, NumberFormatValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_numeral) {
      numeral = _numeral['default'];
    }],
    execute: function () {
      NumberFormatValueConverter = (function () {
        function NumberFormatValueConverter() {
          _classCallCheck(this, NumberFormatValueConverter);
        }

        _createClass(NumberFormatValueConverter, [{
          key: 'toView',
          value: function toView(value, format) {
            return numeral(value).format(format);
          }
        }]);

        return NumberFormatValueConverter;
      })();

      _export('NumberFormatValueConverter', NumberFormatValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzQvbnVtYmVyLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7ZUFFYSwwQkFBMEI7Ozs7Ozs7Ozs7O0FBQTFCLGdDQUEwQjtpQkFBMUIsMEJBQTBCO2dDQUExQiwwQkFBMEI7OztxQkFBMUIsMEJBQTBCOztpQkFDL0IsZ0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNwQixtQkFBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQ3RDOzs7ZUFIVSwwQkFBMEI7Ozs0Q0FBMUIsMEJBQTBCIiwiZmlsZSI6ImV4YW1wbGVzLzQvbnVtYmVyLWZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBudW1lcmFsIGZyb20gJ251bWVyYWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE51bWJlckZvcm1hdFZhbHVlQ29udmVydGVyIHtcclxuICB0b1ZpZXcodmFsdWUsIGZvcm1hdCkge1xyXG4gICAgcmV0dXJuIG51bWVyYWwodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=