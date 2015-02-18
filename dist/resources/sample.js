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
        function Sample() {
          _classCallCheck(this, Sample);
        }

        _prototypeProperties(Sample, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("sample").withProperty("src");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zYW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxNQUFNOzs7QUFGWCxjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxZQUFNO2lCQUFOLE1BQU07Z0NBQU4sTUFBTTs7OzZCQUFOLE1BQU07QUFDVixrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixhQUFhLENBQUMsUUFBUSxDQUFDLENBQ3ZCLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4Qjs7Ozs7O2VBTFUsTUFBTSIsImZpbGUiOiJyZXNvdXJjZXMvc2FtcGxlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=