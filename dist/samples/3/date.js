System.register(["moment"], function (_export) {
  "use strict";

  var moment, _prototypeProperties, _classCallCheck, DateValueConverter;
  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      DateValueConverter = _export("DateValueConverter", (function () {
        function DateValueConverter() {
          _classCallCheck(this, DateValueConverter);
        }

        _prototypeProperties(DateValueConverter, null, {
          toView: {
            value: function toView(value) {
              return moment(value).format("M/D/YYYY h:mm:ss a");
            },
            writable: true,
            configurable: true
          }
        });

        return DateValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvMy9kYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFPLE1BQU0seUNBRUEsa0JBQWtCOzs7QUFGeEIsWUFBTTs7Ozs7OztBQUVBLHdCQUFrQjtpQkFBbEIsa0JBQWtCO2dDQUFsQixrQkFBa0I7Ozs2QkFBbEIsa0JBQWtCO0FBQzdCLGdCQUFNO21CQUFBLGdCQUFDLEtBQUssRUFBRTtBQUNaLHFCQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUNuRDs7Ozs7O2VBSFUsa0JBQWtCIiwiZmlsZSI6InNhbXBsZXMvMy9kYXRlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=