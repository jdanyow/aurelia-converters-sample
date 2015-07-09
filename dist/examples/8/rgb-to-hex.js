System.register([], function (_export) {
  "use strict";

  var RgbToHexValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzgvcmdiLXRvLWhleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxzQkFBc0I7Ozs7Ozs7OztBQUF0Qiw0QkFBc0I7aUJBQXRCLHNCQUFzQjtnQ0FBdEIsc0JBQXNCOzs7cUJBQXRCLHNCQUFzQjs7aUJBQzNCLGdCQUFDLEdBQUcsRUFBRTtBQUNWLG1CQUFPLEdBQUcsR0FBRyxDQUNYLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxJQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBLElBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUEsR0FBSSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQ2hELFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7V0FDekI7OztpQkFFTyxrQkFBQyxHQUFHLEVBQUU7QUFDWixnQkFBSSxHQUFHLEdBQUcsMkNBQTJDO2dCQUNqRCxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMzQixtQkFBTztBQUNMLGVBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUMxQixlQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDMUIsZUFBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQzNCLENBQUM7V0FDSDs7O2VBZlUsc0JBQXNCOzs7d0NBQXRCLHNCQUFzQiIsImZpbGUiOiJleGFtcGxlcy84L3JnYi10by1oZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmdiVG9IZXhWYWx1ZUNvbnZlcnRlciB7XHJcbiAgdG9WaWV3KHJnYikge1xyXG4gICAgcmV0dXJuIFwiI1wiICsgKFxyXG4gICAgICAoMSA8PCAyNCkgKyAocmdiLnIgPDwgMTYpICsgKHJnYi5nIDw8IDgpICsgcmdiLmJcclxuICAgICkudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xyXG4gIH1cclxuXHJcbiAgZnJvbVZpZXcoaGV4KSB7XHJcbiAgICB2YXIgZXhwID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaSxcclxuICAgICAgICByZXN1bHQgPSBleHAuZXhlYyhoZXgpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXHJcbiAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxyXG4gICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9