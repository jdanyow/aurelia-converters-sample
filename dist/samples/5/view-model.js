System.register([], function (_export) {
  "use strict";

  var _prototypeProperties, _classCallCheck, NetWorth;
  return {
    setters: [],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NetWorth = _export("NetWorth", (function () {
        function NetWorth() {
          var _this = this;
          _classCallCheck(this, NetWorth);

          this.update();
          setInterval(function () {
            return _this.update();
          }, 1000);
        }

        _prototypeProperties(NetWorth, null, {
          update: {
            value: function update() {
              this.netWorth = Math.random() * 1000000000;
            },
            writable: true,
            configurable: true
          }
        });

        return NetWorth;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNS92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FBYSxRQUFROzs7Ozs7OztBQUFSLGNBQVE7QUFDUixpQkFEQSxRQUFROztnQ0FBUixRQUFROztBQUVqQixjQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDZCxxQkFBVyxDQUFDO21CQUFNLE1BQUssTUFBTSxFQUFFO1dBQUEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN4Qzs7NkJBSlUsUUFBUTtBQU1uQixnQkFBTTttQkFBQSxrQkFBRztBQUNQLGtCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7YUFDNUM7Ozs7OztlQVJVLFFBQVEiLCJmaWxlIjoic2FtcGxlcy81L3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==