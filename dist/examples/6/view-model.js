System.register(['aurelia-http-client'], function (_export) {
  var HttpClient, _classCallCheck, _createClass, AureliaRepositories;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      AureliaRepositories = (function () {
        function AureliaRepositories() {
          _classCallCheck(this, AureliaRepositories);

          this.repos = [];
        }

        _createClass(AureliaRepositories, [{
          key: 'repos',
          value: undefined,
          enumerable: true
        }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzYvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO2lEQUVhLG1CQUFtQjs7OztzQ0FGeEIsVUFBVTs7Ozs7Ozs7O0FBRUwseUJBQW1CO2lCQUFuQixtQkFBbUI7Z0NBQW5CLG1CQUFtQjs7ZUFDOUIsS0FBSyxHQUFHLEVBQUU7OztxQkFEQyxtQkFBbUI7Ozs7OztpQkFHdEIsb0JBQUc7OztBQUNULG1CQUFPLElBQUksVUFBVSxFQUFFLENBQ3BCLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUNoRCxJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLE1BQUssS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPO2FBQUEsQ0FBQyxDQUFDO1dBQ3BEOzs7ZUFQVSxtQkFBbUI7OztxQ0FBbkIsbUJBQW1CIiwiZmlsZSI6ImV4YW1wbGVzLzYvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=