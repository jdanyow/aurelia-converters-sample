System.register([], function (_export) {
  "use strict";

  var NetWorth;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzUvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxRQUFROzs7Ozs7Ozs7QUFBUixjQUFRO0FBQ1IsaUJBREEsUUFBUSxHQUNMOzs7Z0NBREgsUUFBUTs7QUFFakIsY0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2QscUJBQVcsQ0FBQzttQkFBTSxNQUFLLE1BQU0sRUFBRTtXQUFBLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEM7O3FCQUpVLFFBQVE7O2lCQU1iLGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFVBQVUsQ0FBQztXQUM1Qzs7O2VBUlUsUUFBUTs7OzBCQUFSLFFBQVEiLCJmaWxlIjoiZXhhbXBsZXMvNS92aWV3LW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5ldFdvcnRoIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnVwZGF0ZSgpLCAxMDAwKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMubmV0V29ydGggPSBNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9