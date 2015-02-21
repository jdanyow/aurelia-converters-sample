System.register(["aurelia-framework", "./example-context"], function (_export) {
  "use strict";

  var Behavior, ExampleContext, _prototypeProperties, _classCallCheck, Example;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Example = _export("Example", (function () {
        function Example(context) {
          _classCallCheck(this, Example);

          this.context = context;
          this.model = null;
          this.view = null;
          this.result = false;
        }

        _prototypeProperties(Example, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("example").withProperty("base", "baseChanged");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [ExampleContext];
            },
            writable: true,
            configurable: true
          }
        }, {
          baseChanged: {
            value: function baseChanged(newValue) {
              this.context.base = newValue;
              this.context.example = this;
            },
            writable: true,
            configurable: true
          }
        });

        return Example;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFFBQVEsRUFDUixjQUFjLHlDQUVULE9BQU87OztBQUhaLGNBQVEscUJBQVIsUUFBUTs7QUFDUixvQkFBYyxtQkFBZCxjQUFjOzs7Ozs7O0FBRVQsYUFBTztBQVFQLGlCQVJBLE9BQU8sQ0FRTixPQUFPO2dDQVJSLE9BQU87O0FBU2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCOzs2QkFiVSxPQUFPO0FBQ1gsa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUN4QixZQUFZLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2FBQ3hDOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBUTVDLHFCQUFXO21CQUFBLHFCQUFDLFFBQVEsRUFBRTtBQUNwQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQzdCLGtCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDN0I7Ozs7OztlQWxCVSxPQUFPIiwiZmlsZSI6InJlc291cmNlcy9leGFtcGxlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=