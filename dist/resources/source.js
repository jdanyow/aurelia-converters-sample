System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  'use strict';

  var inject, customAttribute, HttpClient, httpClient, Source;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      httpClient = new HttpClient().configure(function (builder) {
        return builder.withResponseType('text');
      });

      Source = (function () {
        function Source(element) {
          _classCallCheck(this, _Source);

          this.element = element;
        }

        var _Source = Source;

        _createClass(_Source, [{
          key: 'valueChanged',
          value: function valueChanged(newValue) {
            var _this = this;

            if (!newValue) {
              this.element.innerHTML = '';
              return;
            }

            httpClient.get(newValue).then(function (response) {
              _this.element.textContent = response.content.trim();
              Prism.highlightElement(_this.element);
            });
          }
        }]);

        Source = inject(Element)(Source) || Source;
        Source = customAttribute('source')(Source) || Source;
        return Source;
      })();

      _export('Source', Source);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zb3VyY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJDQUdJLFVBQVUsRUFJRCxNQUFNOzs7Ozs7OztpQ0FQWCxNQUFNOzBDQUFFLGVBQWU7O3NDQUN2QixVQUFVOzs7QUFFZCxnQkFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztlQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7T0FBQSxDQUFDOztBQUkzRSxZQUFNO0FBR04saUJBSEEsTUFBTSxDQUdMLE9BQU8sRUFBRTs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOztzQkFMVSxNQUFNOzs7O2lCQU9MLHNCQUFDLFFBQVEsRUFBRTs7O0FBQ3JCLGdCQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Isa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUM1QixxQkFBTzthQUNSOztBQUVELHNCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUNyQixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsb0JBQUssT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25ELG1CQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQzthQUN0QyxDQUFDLENBQUM7V0FDTjs7O0FBbEJVLGNBQU0sR0FEbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILE1BQU0sS0FBTixNQUFNO0FBQU4sY0FBTSxHQUZsQixlQUFlLENBQUMsUUFBUSxDQUFDLENBRWIsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJyZXNvdXJjZXMvc291cmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGN1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5cclxudmFyIGh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCgpLmNvbmZpZ3VyZShidWlsZGVyID0+IGJ1aWxkZXIud2l0aFJlc3BvbnNlVHlwZSgndGV4dCcpKTtcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ3NvdXJjZScpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIFNvdXJjZSB7XHJcbiAgZWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHZhbHVlQ2hhbmdlZChuZXdWYWx1ZSkge1xyXG4gICAgaWYgKCFuZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBodHRwQ2xpZW50LmdldChuZXdWYWx1ZSlcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQudHJpbSgpO1xyXG4gICAgICAgIFByaXNtLmhpZ2hsaWdodEVsZW1lbnQodGhpcy5lbGVtZW50KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==