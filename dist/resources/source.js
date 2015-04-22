System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
  var inject, customAttribute, HttpClient, _classCallCheck, _createClass, httpClient, Source;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customAttribute = _aureliaFramework.customAttribute;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zb3VyY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjswRUFHSSxVQUFVLEVBSUQsTUFBTTs7OztpQ0FQWCxNQUFNOzBDQUFFLGVBQWU7O3NDQUN2QixVQUFVOzs7Ozs7Ozs7QUFFZCxnQkFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztlQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7T0FBQSxDQUFDOztBQUkzRSxZQUFNO0FBQ04saUJBREEsTUFBTSxDQUNMLE9BQU8sRUFBRTs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOztzQkFIVSxNQUFNOzs7O2lCQUtMLHNCQUFDLFFBQVEsRUFBRTs7O0FBQ3JCLGdCQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Isa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUM1QixxQkFBTzthQUNSOztBQUVELHNCQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUNyQixJQUFJLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEIsb0JBQUssT0FBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ25ELG1CQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQzthQUN0QyxDQUFDLENBQUM7V0FDTjs7O0FBaEJVLGNBQU0sR0FEbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILE1BQU0sS0FBTixNQUFNO0FBQU4sY0FBTSxHQUZsQixlQUFlLENBQUMsUUFBUSxDQUFDLENBRWIsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNOzs7d0JBQU4sTUFBTSIsImZpbGUiOiJyZXNvdXJjZXMvc291cmNlLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==