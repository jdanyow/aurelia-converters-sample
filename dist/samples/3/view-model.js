System.register([], function (_export) {
  "use strict";

  var _classCallCheck, NetWorth;
  return {
    setters: [],
    execute: function () {
      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      NetWorth = _export("NetWorth", function NetWorth() {
        var _this = this;
        _classCallCheck(this, NetWorth);

        this.currentDate = new Date();
        this.netWorth = 0;

        setInterval(function () {
          _this.currentDate = new Date();
          _this.netWorth += (Math.random() - 0.43) * (1000 + _this.netWorth);
        }, 1000);
      });
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvMy92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt1QkFBYSxRQUFROzs7Ozs7QUFBUixjQUFRLHVCQUNSLFNBREEsUUFBUTs7OEJBQVIsUUFBUTs7QUFFakIsWUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQzlCLFlBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDOztBQUVsQixtQkFBVyxDQUFDLFlBQU07QUFDaEIsZ0JBQUssV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDOUIsZ0JBQUssUUFBUSxJQUNYLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQSxJQUFLLElBQUksR0FBRyxNQUFLLFFBQVEsQ0FBQSxBQUFDLENBQUM7U0FDbkQsRUFBRSxJQUFJLENBQUMsQ0FBQztPQUNWIiwiZmlsZSI6InNhbXBsZXMvMy92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=