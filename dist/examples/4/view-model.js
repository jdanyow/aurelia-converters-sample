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
              this.currentDate = new Date();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzQvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkNBQWEsUUFBUTs7Ozs7Ozs7QUFBUixjQUFRO0FBQ1IsaUJBREEsUUFBUTs7Z0NBQVIsUUFBUTs7QUFFakIsY0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2QscUJBQVcsQ0FBQzttQkFBTSxNQUFLLE1BQU0sRUFBRTtXQUFBLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEM7OzZCQUpVLFFBQVE7QUFNbkIsZ0JBQU07bUJBQUEsa0JBQUc7QUFDUCxrQkFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzlCLGtCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7YUFDNUM7Ozs7OztlQVRVLFFBQVEiLCJmaWxlIjoiZXhhbXBsZXMvNC92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=