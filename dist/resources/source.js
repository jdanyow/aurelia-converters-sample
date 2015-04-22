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
          key: 'element',
          value: undefined,
          enumerable: true
        }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zb3VyY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjswRUFHSSxVQUFVLEVBSUQsTUFBTTs7OztpQ0FQWCxNQUFNOzBDQUFFLGVBQWU7O3NDQUN2QixVQUFVOzs7Ozs7Ozs7QUFFZCxnQkFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsT0FBTztlQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7T0FBQSxDQUFDOztBQUkzRSxZQUFNO0FBR04saUJBSEEsTUFBTSxDQUdMLE9BQU8sRUFBRTs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOztzQkFMVSxNQUFNOzs7Ozs7OztpQkFPTCxzQkFBQyxRQUFRLEVBQUU7OztBQUNyQixnQkFBSSxDQUFDLFFBQVEsRUFBRTtBQUNiLGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDNUIscUJBQU87YUFDUjs7QUFFRCxzQkFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FDckIsSUFBSSxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hCLG9CQUFLLE9BQU8sQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuRCxtQkFBSyxDQUFDLGdCQUFnQixDQUFDLE1BQUssT0FBTyxDQUFDLENBQUM7YUFDdEMsQ0FBQyxDQUFDO1dBQ047OztBQWxCVSxjQUFNLEdBRGxCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxNQUFNLEtBQU4sTUFBTTtBQUFOLGNBQU0sR0FGbEIsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUViLE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTTs7O3dCQUFOLE1BQU0iLCJmaWxlIjoicmVzb3VyY2VzL3NvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=