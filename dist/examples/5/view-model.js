System.register([], function (_export) {
  var _classCallCheck, _createClass, NetWorth;

  return {
    setters: [],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      NetWorth = (function () {
        function NetWorth() {
          var _this = this;

          _classCallCheck(this, NetWorth);

          this.update();
          setInterval(function () {
            return _this.update();
          }, 1000);
        }

        _createClass(NetWorth, [{
          key: "update",
          value: function update() {
            this.netWorth = Math.random() * 1000000000;
          }
        }]);

        return NetWorth;
      })();

      _export("NetWorth", NetWorth);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzUvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3FDQUFhLFFBQVE7Ozs7Ozs7Ozs7O0FBQVIsY0FBUTtBQUNSLGlCQURBLFFBQVEsR0FDTDs7O2dDQURILFFBQVE7O0FBRWpCLGNBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNkLHFCQUFXLENBQUM7bUJBQU0sTUFBSyxNQUFNLEVBQUU7V0FBQSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3hDOztxQkFKVSxRQUFROztpQkFNYixrQkFBRztBQUNQLGdCQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUM7V0FDNUM7OztlQVJVLFFBQVE7OzswQkFBUixRQUFRIiwiZmlsZSI6ImV4YW1wbGVzLzUvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=