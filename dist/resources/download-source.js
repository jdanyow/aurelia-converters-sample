System.register(["aurelia-framework", "aurelia-http-client"], function (_export) {
  "use strict";

  var Behavior, HttpClient, _prototypeProperties, _classCallCheck, httpClient, DownloadSource;
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
        return builder.withBaseUrl("src/").withResponseType("text");
      });
      DownloadSource = _export("DownloadSource", (function () {
        function DownloadSource(element) {
          _classCallCheck(this, DownloadSource);

          this.element = element;
        }

        _prototypeProperties(DownloadSource, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("download-source").withProperty("format").withProperty("src", "valueChanged").noView();
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
              });
            },
            writable: true,
            configurable: true
          }
        });

        return DownloadSource;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kb3dubG9hZC1zb3VyY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsUUFBUSxFQUNSLFVBQVUseUNBRWQsVUFBVSxFQUVELGNBQWM7OztBQUxuQixjQUFRLHFCQUFSLFFBQVE7O0FBQ1IsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUVkLGdCQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO2VBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7T0FBQSxDQUFDO0FBRS9GLG9CQUFjO0FBVWQsaUJBVkEsY0FBYyxDQVViLE9BQU87Z0NBVlIsY0FBYzs7QUFXdkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzZCQVpVLGNBQWM7QUFDbEIsa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQ2hDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDdEIsWUFBWSxDQUFDLEtBQUssRUFBRSxjQUFjLENBQUMsQ0FDbkMsTUFBTSxFQUFFLENBQUM7YUFDYjs7OztBQUVNLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUFFOzs7OztBQUtyQyxzQkFBWTttQkFBQSxzQkFBQyxRQUFRLEVBQUU7O0FBQ3JCLGtCQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Isb0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUM1Qix1QkFBTztlQUNSOztBQUVELHdCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUNyQixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsc0JBQUssT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2VBQ3BELENBQUMsQ0FBQzthQUNOOzs7Ozs7ZUF4QlUsY0FBYyIsImZpbGUiOiJyZXNvdXJjZXMvZG93bmxvYWQtc291cmNlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=