System.register([], function (_export) {
  var _classCallCheck, _createClass, RgbToHexValueConverter;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      RgbToHexValueConverter = (function () {
        function RgbToHexValueConverter() {
          _classCallCheck(this, RgbToHexValueConverter);
        }

        _createClass(RgbToHexValueConverter, [{
          key: "toView",
          value: function toView(rgb) {
            return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
          }
        }, {
          key: "fromView",
          value: function fromView(hex) {
            var exp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                result = exp.exec(hex);
            return {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            };
          }
        }]);

        return RgbToHexValueConverter;
      })();

      _export("RgbToHexValueConverter", RgbToHexValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzgvcmdiLXRvLWhleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FDQUFhLHNCQUFzQjs7Ozs7Ozs7Ozs7QUFBdEIsNEJBQXNCO2lCQUF0QixzQkFBc0I7Z0NBQXRCLHNCQUFzQjs7O3FCQUF0QixzQkFBc0I7O2lCQUMzQixnQkFBQyxHQUFHLEVBQUU7QUFDVixtQkFBTyxHQUFHLEdBQUcsQ0FDWCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUEsSUFBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxBQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsQUFBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FDaEQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUN6Qjs7O2lCQUVPLGtCQUFDLEdBQUcsRUFBRTtBQUNaLGdCQUFJLEdBQUcsR0FBRywyQ0FBMkM7Z0JBQ2pELE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLG1CQUFPO0FBQ0wsZUFBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQzFCLGVBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUMxQixlQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7YUFDM0IsQ0FBQztXQUNIOzs7ZUFmVSxzQkFBc0I7Ozt3Q0FBdEIsc0JBQXNCIiwiZmlsZSI6ImV4YW1wbGVzLzgvcmdiLXRvLWhleC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=