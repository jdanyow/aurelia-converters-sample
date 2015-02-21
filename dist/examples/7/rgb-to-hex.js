System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, RgbToHexValueConverter;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      RgbToHexValueConverter = _export("RgbToHexValueConverter", (function () {
        function RgbToHexValueConverter() {
          _classCallCheck(this, RgbToHexValueConverter);
        }

        _prototypeProperties(RgbToHexValueConverter, null, {
          toView: {
            value: function toView(rgb) {
              return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
            },
            writable: true,
            configurable: true
          },
          fromView: {
            value: function fromView(hex) {
              var exp = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                  result = exp.exec(hex);
              return {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
              };
            },
            writable: true,
            configurable: true
          }
        });

        return RgbToHexValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzcvcmdiLXRvLWhleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsc0JBQXNCOzs7Ozs7OztBQUF0Qiw0QkFBc0I7aUJBQXRCLHNCQUFzQjtnQ0FBdEIsc0JBQXNCOzs7NkJBQXRCLHNCQUFzQjtBQUNqQyxnQkFBTTttQkFBQSxnQkFBQyxHQUFHLEVBQUU7QUFDVixxQkFBTyxHQUFHLEdBQUcsQ0FDWCxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUEsSUFBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxBQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsQUFBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FDaEQsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN6Qjs7OztBQUVELGtCQUFRO21CQUFBLGtCQUFDLEdBQUcsRUFBRTtBQUNaLGtCQUFJLEdBQUcsR0FBRywyQ0FBMkM7a0JBQ2pELE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzNCLHFCQUFPO0FBQ0wsaUJBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUMxQixpQkFBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQzFCLGlCQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7ZUFDM0IsQ0FBQzthQUNIOzs7Ozs7ZUFmVSxzQkFBc0IiLCJmaWxlIjoiZXhhbXBsZXMvNy9yZ2ItdG8taGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=