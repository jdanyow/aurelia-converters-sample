System.register(['aurelia-framework', './example-context'], function (_export) {
  'use strict';

  var inject, bindable, ExampleContext, Example;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      Example = (function () {
        var _instanceInitializers = {};

        function Example(context) {
          _classCallCheck(this, _Example);

          _defineDecoratedPropertyDescriptor(this, 'base', _instanceInitializers);

          this.model = null;
          this.view = null;
          this.result = false;

          this.context = context;
        }

        var _Example = Example;

        _createDecoratedClass(_Example, [{
          key: 'baseChanged',
          value: function baseChanged(newValue) {
            this.context.base = newValue;
            this.context.example = this;
          }
        }, {
          key: 'base',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        Example = inject(ExampleContext)(Example) || Example;
        return Example;
      })();

      _export('Example', Example);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3Q0FJYSxPQUFPOzs7Ozs7Ozs7O2lDQUpaLE1BQU07bUNBQUUsUUFBUTs7dUNBQ2hCLGNBQWM7OztBQUdULGFBQU87OztBQU9QLGlCQVBBLE9BQU8sQ0FPTixPQUFPLEVBQUU7Ozs7O2VBSnJCLEtBQUssR0FBRyxJQUFJO2VBQ1osSUFBSSxHQUFHLElBQUk7ZUFDWCxNQUFNLEdBQUcsS0FBSzs7QUFHWixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7dUJBVFUsT0FBTzs7OztpQkFXUCxxQkFBQyxRQUFRLEVBQUU7QUFDcEIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUM3QixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1dBQzdCOzs7dUJBYkEsUUFBUTs7Ozs7QUFERSxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FDVixPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU87Ozt5QkFBUCxPQUFPIiwiZmlsZSI6InJlc291cmNlcy9leGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7RXhhbXBsZUNvbnRleHR9IGZyb20gJy4vZXhhbXBsZS1jb250ZXh0JztcclxuXHJcbkBpbmplY3QoRXhhbXBsZUNvbnRleHQpXHJcbmV4cG9ydCBjbGFzcyBFeGFtcGxlIHtcclxuICBAYmluZGFibGUgYmFzZTtcclxuICBjb250ZXh0O1xyXG4gIG1vZGVsID0gbnVsbDtcclxuICB2aWV3ID0gbnVsbDtcclxuICByZXN1bHQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcclxuICB9XHJcblxyXG4gIGJhc2VDaGFuZ2VkKG5ld1ZhbHVlKSB7XHJcbiAgICB0aGlzLmNvbnRleHQuYmFzZSA9IG5ld1ZhbHVlO1xyXG4gICAgdGhpcy5jb250ZXh0LmV4YW1wbGUgPSB0aGlzO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=