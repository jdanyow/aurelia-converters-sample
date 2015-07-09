System.register(['aurelia-http-client'], function (_export) {
  'use strict';

  var HttpClient, AureliaRepositories;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      AureliaRepositories = (function () {
        function AureliaRepositories() {
          _classCallCheck(this, AureliaRepositories);

          this.repos = [];
        }

        _createClass(AureliaRepositories, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return new HttpClient().get('https://api.github.com/orgs/aurelia/repos').then(function (response) {
              return _this.repos = response.content;
            });
          }
        }]);

        return AureliaRepositories;
      })();

      _export('AureliaRepositories', AureliaRepositories);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzcvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBRWEsbUJBQW1COzs7Ozs7OztzQ0FGeEIsVUFBVTs7O0FBRUwseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7ZUFDOUIsS0FBSyxHQUFHLEVBQUU7OztxQkFEQyxtQkFBbUI7O2lCQUd0QixvQkFBRzs7O0FBQ1QsbUJBQU8sSUFBSSxVQUFVLEVBQUUsQ0FDcEIsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQ2hELElBQUksQ0FBQyxVQUFBLFFBQVE7cUJBQUksTUFBSyxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU87YUFBQSxDQUFDLENBQUM7V0FDcEQ7OztlQVBVLG1CQUFtQjs7O3FDQUFuQixtQkFBbUIiLCJmaWxlIjoiZXhhbXBsZXMvNy92aWV3LW1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXJlbGlhUmVwb3NpdG9yaWVzIHtcclxuICByZXBvcyA9IFtdO1xyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHJldHVybiBuZXcgSHR0cENsaWVudCgpXHJcbiAgICAgIC5nZXQoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vb3Jncy9hdXJlbGlhL3JlcG9zJylcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5yZXBvcyA9IHJlc3BvbnNlLmNvbnRlbnQpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=