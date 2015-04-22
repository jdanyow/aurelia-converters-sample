System.register([], function (_export) {
  var _classCallCheck, _createClass, TakeValueConverter;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      TakeValueConverter = (function () {
        function TakeValueConverter() {
          _classCallCheck(this, TakeValueConverter);
        }

        _createClass(TakeValueConverter, [{
          key: "toView",
          value: function toView(array, count) {
            return array.slice(0, count);
          }
        }]);

        return TakeValueConverter;
      })();

      _export("TakeValueConverter", TakeValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzYvdGFrZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FDQUFhLGtCQUFrQjs7Ozs7Ozs7Ozs7QUFBbEIsd0JBQWtCO2lCQUFsQixrQkFBa0I7Z0NBQWxCLGtCQUFrQjs7O3FCQUFsQixrQkFBa0I7O2lCQUN2QixnQkFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ25CLG1CQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1dBQzlCOzs7ZUFIVSxrQkFBa0I7OztvQ0FBbEIsa0JBQWtCIiwiZmlsZSI6ImV4YW1wbGVzLzYvdGFrZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=