System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Sample;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Sample = _export("Sample", (function () {
        function Sample(element) {
          _classCallCheck(this, Sample);

          this.githubBase = "https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages";
        }

        _prototypeProperties(Sample, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("sample").withProperty("src").withProperty("converters");
            },
            writable: true,
            configurable: true
          }
        });

        return Sample;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zYW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxNQUFNOzs7QUFGWCxjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxZQUFNO0FBUU4saUJBUkEsTUFBTSxDQVFMLE9BQU87Z0NBUlIsTUFBTTs7QUFVZixjQUFJLENBQUMsVUFBVSxHQUFHLG9FQUFvRSxDQUFDO1NBQ3hGOzs2QkFYVSxNQUFNO0FBQ1Ysa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUN2QixZQUFZLENBQUMsS0FBSyxDQUFDLENBQ25CLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMvQjs7Ozs7O2VBTlUsTUFBTSIsImZpbGUiOiJyZXNvdXJjZXMvc2FtcGxlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=