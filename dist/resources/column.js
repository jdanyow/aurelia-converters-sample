System.register(["aurelia-framework"], function (_export) {
  "use strict";

  var Behavior, _prototypeProperties, _classCallCheck, Column;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Column = _export("Column", (function () {
        function Column() {
          _classCallCheck(this, Column);
        }

        _prototypeProperties(Column, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("column");
            },
            writable: true,
            configurable: true
          }
        });

        return Column;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9jb2x1bW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSx5Q0FFSCxNQUFNOzs7QUFGWCxjQUFRLHFCQUFSLFFBQVE7Ozs7Ozs7QUFFSCxZQUFNO0FBS04saUJBTEEsTUFBTTtnQ0FBTixNQUFNO1NBTWhCOzs2QkFOVSxNQUFNO0FBQ1Ysa0JBQVE7bUJBQUEsb0JBQUc7QUFDaEIscUJBQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN6Qzs7Ozs7O2VBSFUsTUFBTSIsImZpbGUiOiJyZXNvdXJjZXMvY29sdW1uLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=