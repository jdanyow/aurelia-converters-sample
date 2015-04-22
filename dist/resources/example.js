System.register(['aurelia-framework', './example-context'], function (_export) {
  var inject, bindable, ExampleContext, _classCallCheck, _createDecoratedClass, Example;

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      Example = (function () {
        var _instanceInitializers = {};

        function Example(context) {
          _classCallCheck(this, _Example);

          this.__initializeProperties();

          this.context = context;
        }

        var _Example = Example;

        _createDecoratedClass(_Example, [{
          key: 'base',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'context',
          value: undefined,
          enumerable: true
        }, {
          key: 'model',
          value: undefined,
          enumerable: true
        }, {
          key: 'view',
          value: undefined,
          enumerable: true
        }, {
          key: 'result',
          value: undefined,
          enumerable: true
        }, {
          key: 'baseChanged',
          value: function baseChanged(newValue) {
            this.context.base = newValue;
            this.context.example = this;
          }
        }, {
          key: '__initializeProperties',
          value: function __initializeProperties() {
            this.base = _instanceInitializers.base.call(this);
            this.model = null;
            this.view = null;
            this.result = false;
          }
        }], null, _instanceInitializers);

        Example = inject(ExampleContext)(Example) || Example;
        return Example;
      })();

      _export('Example', Example);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Z0ZBSWEsT0FBTzs7OztpQ0FKWixNQUFNO21DQUFFLFFBQVE7O3VDQUNoQixjQUFjOzs7Ozs7Ozs7QUFHVCxhQUFPOzs7QUFPUCxpQkFQQSxPQUFPLENBT04sT0FBTyxFQUFFOzs7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7dUJBVFUsT0FBTzs7Ozt1QkFDakIsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQVVFLHFCQUFDLFFBQVEsRUFBRTtBQUNwQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQzdCLGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7V0FDN0I7Ozs7aUJBYlMsSUFBSSx5QkFBSixJQUFJO2lCQUVkLEtBQUssR0FBRyxJQUFJO2lCQUNaLElBQUksR0FBRyxJQUFJO2lCQUNYLE1BQU0sR0FBRyxLQUFLOzs7O0FBTEgsZUFBTyxHQURuQixNQUFNLENBQUMsY0FBYyxDQUFDLENBQ1YsT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7eUJBQVAsT0FBTyIsImZpbGUiOiJyZXNvdXJjZXMvZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=