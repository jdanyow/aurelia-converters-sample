System.register([], function (_export) {
  "use strict";

  var TakeValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzYvdGFrZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxrQkFBa0I7Ozs7Ozs7OztBQUFsQix3QkFBa0I7aUJBQWxCLGtCQUFrQjtnQ0FBbEIsa0JBQWtCOzs7cUJBQWxCLGtCQUFrQjs7aUJBQ3ZCLGdCQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDbkIsbUJBQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7V0FDOUI7OztlQUhVLGtCQUFrQjs7O29DQUFsQixrQkFBa0IiLCJmaWxlIjoiZXhhbXBsZXMvNi90YWtlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFRha2VWYWx1ZUNvbnZlcnRlciB7XHJcbiAgdG9WaWV3KGFycmF5LCBjb3VudCkge1xyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKDAsIGNvdW50KTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9