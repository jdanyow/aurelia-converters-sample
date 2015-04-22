/* */ 
System.register(['aurelia-metadata', 'aurelia-loader'], function (_export) {
  var Origin, Loader, _classCallCheck, _createClass, _get, _inherits, sys, DefaultLoader;

  function ensureOriginOnExports(executed, name) {
    var target = executed,
        key,
        exportedValue;

    if (target.__useDefault) {
      target = target['default'];
    }

    Origin.set(target, new Origin(name, 'default'));

    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === 'function') {
        Origin.set(exportedValue, new Origin(name, key));
      }
    }

    return executed;
  }

  return {
    setters: [function (_aureliaMetadata) {
      Origin = _aureliaMetadata.Origin;
    }, function (_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      if (!window.System || !window.System['import']) {
        sys = window.System = window.System || {};

        sys.polyfilled = true;
        sys.map = {};

        sys['import'] = function (moduleId) {
          return new Promise(function (resolve, reject) {
            require([moduleId], resolve, reject);
          });
        };

        sys.normalize = function (url) {
          return Promise.resolve(url);
        };
      }
      DefaultLoader = (function (_Loader) {
        function DefaultLoader() {
          _classCallCheck(this, DefaultLoader);

          _get(Object.getPrototypeOf(DefaultLoader.prototype), 'constructor', this).call(this);

          this.moduleRegistry = {};
          var that = this;

          if (System.polyfilled) {
            define('view', [], {
              load: function load(name, req, onload, config) {
                var entry = that.getOrCreateTemplateRegistryEntry(name),
                    address;

                if (entry.templateIsLoaded) {
                  onload(entry);
                  return;
                }

                address = req.toUrl(name);

                that.importTemplate(address).then(function (template) {
                  entry.setTemplate(template);
                  onload(entry);
                });
              }
            });
          } else {
            System.set('view', System.newModule({
              fetch: (function (_fetch) {
                function fetch(_x, _x2) {
                  return _fetch.apply(this, arguments);
                }

                fetch.toString = function () {
                  return _fetch.toString();
                };

                return fetch;
              })(function (load, fetch) {
                var id = load.name.substring(0, load.name.indexOf('!'));
                var entry = load.metadata.templateRegistryEntry = that.getOrCreateTemplateRegistryEntry(id);

                if (entry.templateIsLoaded) {
                  return '';
                }

                return that.importTemplate(load.address).then(function (template) {
                  entry.setTemplate(template);
                  return '';
                });
              }),
              instantiate: function instantiate(load) {
                return load.metadata.templateRegistryEntry;
              }
            }));
          }
        }

        _inherits(DefaultLoader, _Loader);

        _createClass(DefaultLoader, [{
          key: 'loadModule',
          value: function loadModule(id) {
            var _this = this;

            return System.normalize(id).then(function (newId) {
              var existing = _this.moduleRegistry[newId];
              if (existing) {
                return existing;
              }

              return System['import'](newId).then(function (m) {
                _this.moduleRegistry[newId] = m;
                return ensureOriginOnExports(m, newId);
              });
            });
          }
        }, {
          key: 'loadAllModules',
          value: function loadAllModules(ids) {
            var loads = [];

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = ids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var id = _step.value;

                loads.push(this.loadModule(id));
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator['return']) {
                  _iterator['return']();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return Promise.all(loads);
          }
        }, {
          key: 'loadTemplate',
          value: function loadTemplate(url) {
            if (System.polyfilled) {
              return System['import']('view!' + url);
            } else {
              return System['import'](url + '!view');
            }
          }
        }]);

        return DefaultLoader;
      })(Loader);

      _export('DefaultLoader', DefaultLoader);

      window.AureliaLoader = DefaultLoader;
    }
  };
});