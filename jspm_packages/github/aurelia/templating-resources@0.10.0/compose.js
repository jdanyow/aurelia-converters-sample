/* */ 
System.register(['aurelia-dependency-injection', 'aurelia-templating'], function (_export) {
  var Container, inject, CompositionEngine, ViewSlot, ViewResources, customElement, bindable, noView, _classCallCheck, _createClass, Compose;

  function processInstruction(composer, instruction) {
    composer.compositionEngine.compose(Object.assign(instruction, {
      executionContext: composer.executionContext,
      container: composer.container,
      viewSlot: composer.viewSlot,
      viewResources: composer.viewResources,
      currentBehavior: composer.currentBehavior
    })).then(function (next) {
      composer.currentBehavior = next;
      composer.currentViewModel = next ? next.executionContext : null;
    });
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      Container = _aureliaDependencyInjection.Container;
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaTemplating) {
      CompositionEngine = _aureliaTemplating.CompositionEngine;
      ViewSlot = _aureliaTemplating.ViewSlot;
      ViewResources = _aureliaTemplating.ViewResources;
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
      noView = _aureliaTemplating.noView;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Compose = (function () {
        function Compose(container, compositionEngine, viewSlot, viewResources) {
          _classCallCheck(this, Compose);

          this.container = container;
          this.compositionEngine = compositionEngine;
          this.viewSlot = viewSlot;
          this.viewResources = viewResources;
        }

        _createClass(Compose, [{
          key: 'bind',
          value: function bind(executionContext) {
            this.executionContext = executionContext;
            processInstruction(this, { view: this.view, viewModel: this.viewModel, model: this.model });
          }
        }, {
          key: 'modelChanged',
          value: function modelChanged(newValue, oldValue) {
            var vm = this.currentViewModel;

            if (vm && typeof vm.activate === 'function') {
              vm.activate(newValue);
            }
          }
        }, {
          key: 'viewChanged',
          value: function viewChanged(newValue, oldValue) {
            processInstruction(this, { view: newValue, viewModel: this.currentViewModel || this.viewModel, model: this.model });
          }
        }, {
          key: 'viewModelChanged',
          value: function viewModelChanged(newValue, oldValue) {
            processInstruction(this, { viewModel: newValue, view: this.view, model: this.model });
          }
        }]);

        _export('Compose', Compose = customElement('compose')(Compose) || Compose);

        _export('Compose', Compose = bindable('model')(Compose) || Compose);

        _export('Compose', Compose = bindable('view')(Compose) || Compose);

        _export('Compose', Compose = bindable('viewModel')(Compose) || Compose);

        _export('Compose', Compose = noView(Compose) || Compose);

        _export('Compose', Compose = inject(Container, CompositionEngine, ViewSlot, ViewResources)(Compose) || Compose);

        return Compose;
      })();

      _export('Compose', Compose);
    }
  };
});