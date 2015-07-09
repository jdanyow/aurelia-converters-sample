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
            this.currentDate = new Date();
            this.netWorth = Math.random() * 1000000000;
          }
        }]);

        return NetWorth;
      })();

      _export("NetWorth", NetWorth);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzQvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxRQUFROzs7Ozs7Ozs7QUFBUixjQUFRO0FBQ1IsaUJBREEsUUFBUSxHQUNMOzs7Z0NBREgsUUFBUTs7QUFFakIsY0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2QscUJBQVcsQ0FBQzttQkFBTSxNQUFLLE1BQU0sRUFBRTtXQUFBLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDeEM7O3FCQUpVLFFBQVE7O2lCQU1iLGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUM5QixnQkFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDO1dBQzVDOzs7ZUFUVSxRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJleGFtcGxlcy80L3ZpZXctbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmV0V29ydGgge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICAgIHNldEludGVydmFsKCgpID0+IHRoaXMudXBkYXRlKCksIDEwMDApO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB0aGlzLm5ldFdvcnRoID0gTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDA7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==