System.register(["aurelia-http-client"], function (_export) {
  "use strict";

  var HttpClient, _prototypeProperties, _classCallCheck, AureliaRepositories;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      AureliaRepositories = _export("AureliaRepositories", (function () {
        function AureliaRepositories() {
          _classCallCheck(this, AureliaRepositories);

          this.repos = [];
        }

        _prototypeProperties(AureliaRepositories, null, {
          activate: {
            value: function activate() {
              var _this = this;
              return new HttpClient().get("https://api.github.com/orgs/aurelia/repos").then(function (response) {
                return _this.repos = response.content;
              });
            },
            writable: true,
            configurable: true
          }
        });

        return AureliaRepositories;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvNi92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLFVBQVUseUNBRUwsbUJBQW1COzs7QUFGeEIsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7OztBQUVMLHlCQUFtQjtBQUNuQixpQkFEQSxtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7QUFFNUIsY0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDakI7OzZCQUhVLG1CQUFtQjtBQUs5QixrQkFBUTttQkFBQSxvQkFBRzs7QUFDVCxxQkFBTyxJQUFJLFVBQVUsRUFBRSxDQUNwQixHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FDaEQsSUFBSSxDQUFDLFVBQUEsUUFBUTt1QkFBSSxNQUFLLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTztlQUFBLENBQUMsQ0FBQzthQUNwRDs7Ozs7O2VBVFUsbUJBQW1CIiwiZmlsZSI6InNhbXBsZXMvNi92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=