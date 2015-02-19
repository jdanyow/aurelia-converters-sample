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
              if (rgb && typeof rgb.r === "number" && typeof rgb.g === "number" && typeof rgb.b === "number") {
                return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
              }return null;
            },
            writable: true,
            configurable: true
          },
          fromView: {
            value: function fromView(hex) {
              var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
              if (result) {
                return {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16)
                };
              }return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNy9yZ2ItdG8taGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBYSxzQkFBc0I7Ozs7Ozs7O0FBQXRCLDRCQUFzQjtpQkFBdEIsc0JBQXNCO2dDQUF0QixzQkFBc0I7Ozs2QkFBdEIsc0JBQXNCO0FBQ2pDLGdCQUFNO21CQUFBLGdCQUFDLEdBQUcsRUFBRTtBQUNWLGtCQUFJLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVE7QUFDNUYsdUJBQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBLElBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUEsQUFBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBLEFBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztlQUFBLEFBQ3hGLE9BQU8sSUFBSSxDQUFDO2FBQ2I7Ozs7QUFFRCxrQkFBUTttQkFBQSxrQkFBQyxHQUFHLEVBQUU7QUFDWixrQkFBSSxNQUFNLEdBQUcsMkNBQTJDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25FLGtCQUFJLE1BQU07QUFDUix1QkFBTztBQUNMLG1CQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDMUIsbUJBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUMxQixtQkFBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2lCQUMzQixDQUFDO2VBQUEsQUFDSixPQUFPLElBQUksQ0FBQzthQUNiOzs7Ozs7ZUFoQlUsc0JBQXNCIiwiZmlsZSI6InNhbXBsZXMvNy9yZ2ItdG8taGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=