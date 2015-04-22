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

          this.base = _instanceInitializers.base.call(this);

          this.context = context;
          this.model = null;
          this.view = null;
          this.result = false;
        }

        var _Example = Example;

        _createDecoratedClass(_Example, [{
          key: 'base',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'baseChanged',
          value: function baseChanged(newValue) {
            this.context.base = newValue;
            this.context.example = this;
          }
        }], null, _instanceInitializers);

        Example = inject(ExampleContext)(Example) || Example;
        return Example;
      })();

      _export('Example', Example);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Z0ZBSWEsT0FBTzs7OztpQ0FKWixNQUFNO21DQUFFLFFBQVE7O3VDQUNoQixjQUFjOzs7Ozs7Ozs7QUFHVCxhQUFPOzs7QUFHUCxpQkFIQSxPQUFPLENBR04sT0FBTyxFQUFFOzs7ZUFGWCxJQUFJLHlCQUFKLElBQUk7O0FBR1osY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDbEIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7O3VCQVJVLE9BQU87Ozs7dUJBQ2pCLFFBQVE7Ozs7O2lCQVNFLHFCQUFDLFFBQVEsRUFBRTtBQUNwQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQzdCLGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7V0FDN0I7OztBQWJVLGVBQU8sR0FEbkIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUNWLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTzs7O3lCQUFQLE9BQU8iLCJmaWxlIjoicmVzb3VyY2VzL2V4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9