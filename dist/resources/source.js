System.register(["aurelia-framework", "aurelia-http-client"], function (_export) {
  "use strict";

  var Behavior, HttpClient, _prototypeProperties, _classCallCheck, httpClient, Source;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      httpClient = new HttpClient().configure(function (builder) {
        return builder.withResponseType("text");
      });
      Source = _export("Source", (function () {
        function Source(element) {
          _classCallCheck(this, Source);

          this.element = element;
        }

        _prototypeProperties(Source, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("source").withProperty("value", "valueChanged", "source");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(newValue) {
              var _this = this;
              if (!newValue) {
                this.element.innerHTML = "";
                return;
              }

              httpClient.get(newValue).then(function (response) {
                _this.element.textContent = response.content.trim();
                Prism.highlightElement(_this.element);
              });
            },
            writable: true,
            configurable: true
          }
        });

        return Source;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zb3VyY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFVBQVUseUNBRWQsVUFBVSxFQUVELE1BQU07OztBQUxYLGNBQVEscUJBQVIsUUFBUTs7QUFDUixnQkFBVSxzQkFBVixVQUFVOzs7Ozs7O0FBRWQsZ0JBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87ZUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO09BQUEsQ0FBQztBQUUzRSxZQUFNO0FBUU4saUJBUkEsTUFBTSxDQVFMLE9BQU87Z0NBUlIsTUFBTTs7QUFTZixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7NkJBVlUsTUFBTTtBQUNWLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUNaLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUMxQixZQUFZLENBQUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLENBQUMsQ0FBQzthQUNwRDs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUFFOzs7OztBQUtyQyxzQkFBWTttQkFBQSxzQkFBQyxRQUFRLEVBQUU7O0FBQ3JCLGtCQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Isb0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUM1Qix1QkFBTztlQUNSOztBQUVELHdCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUNyQixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsc0JBQUssT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25ELHFCQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQztlQUN0QyxDQUFDLENBQUM7YUFDTjs7Ozs7O2VBdkJVLE1BQU0iLCJmaWxlIjoicmVzb3VyY2VzL3NvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9