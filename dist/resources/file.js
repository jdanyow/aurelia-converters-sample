System.register(['aurelia-framework', './example-context'], function (_export) {
  var bindable, inject, ExampleContext, _classCallCheck, _createDecoratedClass, extensionLanguageMap, File;

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
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      extensionLanguageMap = {
        js: 'javascript',
        html: 'markup'
      };

      File = (function () {
        var _instanceInitializers = {};

        function File(context) {
          _classCallCheck(this, _File);

          this.src = _instanceInitializers.src.call(this);
          this.view = _instanceInitializers.view.call(this);
          this.model = _instanceInitializers.model.call(this);
          this.info = null;

          this.example = context.example;
          this.base = context.base;
          this.githubBase = context.githubBase;
        }

        var _File = File;

        _createDecoratedClass(_File, [{
          key: 'src',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'view',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'model',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
          key: 'example',
          value: undefined,
          enumerable: true
        }, {
          key: 'base',
          value: undefined,
          enumerable: true
        }, {
          key: 'githubBase',
          value: undefined,
          enumerable: true
        }, {
          key: 'info',
          value: undefined,
          enumerable: true
        }, {
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
        }], null, _instanceInitializers);

        File = inject(ExampleContext)(File) || File;
        return File;
      })();

      _export('File', File);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9maWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Z0ZBR0ksb0JBQW9CLEVBV1gsSUFBSTs7QUFOakIsV0FBUyxXQUFXLENBQUMsUUFBUSxFQUFFO0FBQzdCLFFBQUksU0FBUyxHQUFHLEFBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM3RCxXQUFPLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0dBQ3hDOzs7O21DQVhPLFFBQVE7aUNBQUUsTUFBTTs7dUNBQ2hCLGNBQWM7Ozs7Ozs7OztBQUVsQiwwQkFBb0IsR0FBRztBQUN6QixVQUFFLEVBQUUsWUFBWTtBQUNoQixZQUFJLEVBQUUsUUFBUTtPQUNmOztBQVFZLFVBQUk7OztBQVNKLGlCQVRBLElBQUksQ0FTSCxPQUFPLEVBQUU7OztlQVJYLEdBQUcseUJBQUgsR0FBRztlQUNILElBQUkseUJBQUosSUFBSTtlQUNKLEtBQUsseUJBQUwsS0FBSztlQUlmLElBQUksR0FBRyxJQUFJOztBQUdULGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUMvQixjQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDekIsY0FBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3RDOztvQkFiVSxJQUFJOzs7O3VCQUNkLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFZTCxnQkFBRztBQUNMLGdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7QUFFM0MsZ0JBQUksQ0FBQyxJQUFJLEdBQUc7QUFDVixrQkFBSSxFQUFFLEdBQUc7QUFDVCxzQkFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDM0Qsc0JBQVEsRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQzFCLGlCQUFHLEVBQUUsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDbkMscUJBQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHO2FBQzNELENBQUM7O0FBRUYsZ0JBQUksSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQ3RCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFM0IsZ0JBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQ3ZCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzs7QUFFNUIsbUJBQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO1dBQ2hEOzs7QUFqQ1UsWUFBSSxHQURoQixNQUFNLENBQUMsY0FBYyxDQUFDLENBQ1YsSUFBSSxLQUFKLElBQUk7ZUFBSixJQUFJOzs7c0JBQUosSUFBSSIsImZpbGUiOiJyZXNvdXJjZXMvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=