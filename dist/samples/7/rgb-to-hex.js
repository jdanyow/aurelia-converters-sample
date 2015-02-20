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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNy9yZ2ItdG8taGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBYSxzQkFBc0I7Ozs7Ozs7O0FBQXRCLDRCQUFzQjtpQkFBdEIsc0JBQXNCO2dDQUF0QixzQkFBc0I7Ozs2QkFBdEIsc0JBQXNCO0FBQ2pDLGdCQUFNO21CQUFBLGdCQUFDLEdBQUcsRUFBRTtBQUNWLHFCQUFPLEdBQUcsR0FBRyxDQUNYLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxJQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBLEFBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQSxBQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUNoRCxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pCOzs7O0FBRUQsa0JBQVE7bUJBQUEsa0JBQUMsR0FBRyxFQUFFO0FBQ1osa0JBQUksR0FBRyxHQUFHLDJDQUEyQztrQkFDakQsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0IscUJBQU87QUFDTCxpQkFBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQzFCLGlCQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDMUIsaUJBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztlQUMzQixDQUFDO2FBQ0g7Ozs7OztlQWZVLHNCQUFzQiIsImZpbGUiOiJzYW1wbGVzLzcvcmdiLXRvLWhleC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9