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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzYvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLHlDQUVMLG1CQUFtQjs7O0FBRnhCLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7QUFFTCx5QkFBbUI7QUFDbkIsaUJBREEsbUJBQW1CO2dDQUFuQixtQkFBbUI7O0FBRTVCLGNBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2pCOzs2QkFIVSxtQkFBbUI7QUFLOUIsa0JBQVE7bUJBQUEsb0JBQUc7O0FBQ1QscUJBQU8sSUFBSSxVQUFVLEVBQUUsQ0FDcEIsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQ2hELElBQUksQ0FBQyxVQUFBLFFBQVE7dUJBQUksTUFBSyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU87ZUFBQSxDQUFDLENBQUM7YUFDcEQ7Ozs7OztlQVRVLG1CQUFtQiIsImZpbGUiOiJleGFtcGxlcy82L3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==