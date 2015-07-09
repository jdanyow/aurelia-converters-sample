System.register(['aurelia-framework', './example-context'], function (_export) {
  'use strict';

  var bindable, inject, ExampleContext, extensionLanguageMap, File;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  function getLanguage(filename) {
    var extension = /\.(\w+)$/.exec(filename)[1].toLowerCase();
    return extensionLanguageMap[extension];
  }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      extensionLanguageMap = {
        js: 'javascript',
        html: 'markup'
      };

      File = (function () {
        var _instanceInitializers = {};

        function File(context) {
          _classCallCheck(this, _File);

          _defineDecoratedPropertyDescriptor(this, 'src', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'view', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

          this.info = null;

          this.example = context.example;
          this.base = context.base;
          this.githubBase = context.githubBase;
        }

        var _File = File;

        _createDecoratedClass(_File, [{
          key: 'bind',
          value: function bind() {
            var src = this.src,
                example = this.example;

            this.info = {
              name: src,
              moduleId: this.base + '/' + src.substr(0, src.indexOf('.')),
              language: getLanguage(src),
              url: 'src/' + this.base + '/' + src,
              repoUrl: this.githubBase + '/src/' + this.base + '/' + src
            };

            if (this.view === 'true') example.view = this.info;

            if (this.model === 'true') example.model = this.info;

            example.result = example.view && example.model;
          }
        }, {
          key: 'src',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'view',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'model',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        File = inject(ExampleContext)(File) || File;
        return File;
      })();

      _export('File', File);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9maWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt3Q0FHSSxvQkFBb0IsRUFXWCxJQUFJOzs7Ozs7OztBQU5qQixXQUFTLFdBQVcsQ0FBQyxRQUFRLEVBQUU7QUFDN0IsUUFBSSxTQUFTLEdBQUcsVUFBVyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3RCxXQUFPLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQ3hDOzs7O21DQVhPLFFBQVE7aUNBQUUsTUFBTTs7dUNBQ2hCLGNBQWM7OztBQUVsQiwwQkFBb0IsR0FBRztBQUN6QixVQUFFLEVBQUUsWUFBWTtBQUNoQixZQUFJLEVBQUUsUUFBUTtPQUNmOztBQVFZLFVBQUk7OztBQVNKLGlCQVRBLElBQUksQ0FTSCxPQUFPLEVBQUU7Ozs7Ozs7OztlQUZyQixJQUFJLEdBQUcsSUFBSTs7QUFHVCxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUM7QUFDL0IsY0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3pCLGNBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUN0Qzs7b0JBYlUsSUFBSTs7OztpQkFlWCxnQkFBRztBQUNMLGdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7QUFFM0MsZ0JBQUksQ0FBQyxJQUFJLEdBQUc7QUFDVixrQkFBSSxFQUFFLEdBQUc7QUFDVCxzQkFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0Qsc0JBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQzFCLGlCQUFHLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDbkMscUJBQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHO2FBQzNELENBQUM7O0FBRUYsZ0JBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQ3RCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFM0IsZ0JBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQ3ZCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFNUIsbUJBQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1dBQ2hEOzs7dUJBaENBLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O0FBSEUsWUFBSSxHQURoQixNQUFNLENBQUMsY0FBYyxDQUFDLENBQ1YsSUFBSSxLQUFKLElBQUk7ZUFBSixJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJyZXNvdXJjZXMvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0V4YW1wbGVDb250ZXh0fSBmcm9tICcuL2V4YW1wbGUtY29udGV4dCc7XHJcblxyXG52YXIgZXh0ZW5zaW9uTGFuZ3VhZ2VNYXAgPSB7XHJcbiAganM6ICdqYXZhc2NyaXB0JyxcclxuICBodG1sOiAnbWFya3VwJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2UoZmlsZW5hbWUpIHtcclxuICB2YXIgZXh0ZW5zaW9uID0gKC9cXC4oXFx3KykkLykuZXhlYyhmaWxlbmFtZSlbMV0udG9Mb3dlckNhc2UoKTtcclxuICByZXR1cm4gZXh0ZW5zaW9uTGFuZ3VhZ2VNYXBbZXh0ZW5zaW9uXTtcclxufVxyXG5cclxuQGluamVjdChFeGFtcGxlQ29udGV4dClcclxuZXhwb3J0IGNsYXNzIEZpbGUge1xyXG4gIEBiaW5kYWJsZSBzcmM7XHJcbiAgQGJpbmRhYmxlIHZpZXc7XHJcbiAgQGJpbmRhYmxlIG1vZGVsO1xyXG4gIGV4YW1wbGU7XHJcbiAgYmFzZTtcclxuICBnaXRodWJCYXNlO1xyXG4gIGluZm8gPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XHJcbiAgICB0aGlzLmV4YW1wbGUgPSBjb250ZXh0LmV4YW1wbGU7XHJcbiAgICB0aGlzLmJhc2UgPSBjb250ZXh0LmJhc2U7XHJcbiAgICB0aGlzLmdpdGh1YkJhc2UgPSBjb250ZXh0LmdpdGh1YkJhc2U7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdmFyIHNyYyA9IHRoaXMuc3JjLCBleGFtcGxlID0gdGhpcy5leGFtcGxlO1xyXG5cclxuICAgIHRoaXMuaW5mbyA9IHtcclxuICAgICAgbmFtZTogc3JjLFxyXG4gICAgICBtb2R1bGVJZDogdGhpcy5iYXNlICsgJy8nICsgc3JjLnN1YnN0cigwLCBzcmMuaW5kZXhPZignLicpKSxcclxuICAgICAgbGFuZ3VhZ2U6IGdldExhbmd1YWdlKHNyYyksXHJcbiAgICAgIHVybDogJ3NyYy8nICsgdGhpcy5iYXNlICsgJy8nICsgc3JjLFxyXG4gICAgICByZXBvVXJsOiB0aGlzLmdpdGh1YkJhc2UgKyAnL3NyYy8nICsgdGhpcy5iYXNlICsgJy8nICsgc3JjXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnZpZXcgPT09ICd0cnVlJylcclxuICAgICAgZXhhbXBsZS52aWV3ID0gdGhpcy5pbmZvO1xyXG5cclxuICAgIGlmICh0aGlzLm1vZGVsID09PSAndHJ1ZScpXHJcbiAgICAgIGV4YW1wbGUubW9kZWwgPSB0aGlzLmluZm87XHJcblxyXG4gICAgZXhhbXBsZS5yZXN1bHQgPSBleGFtcGxlLnZpZXcgJiYgZXhhbXBsZS5tb2RlbDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9