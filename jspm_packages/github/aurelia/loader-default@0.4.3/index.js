/* */ 
System.register(["aurelia-metadata", "aurelia-loader", "aurelia-path"], function (_export) {
  var Origin, Loader, join, _prototypeProperties, _inherits, _classCallCheck, sys, DefaultLoader;

  function ensureOriginOnExports(executed, name) {
    var target = executed,
        key,
        exportedValue;

    if (target.__useDefault) {
      target = target["default"];
    }

    Origin.set(target, new Origin(name, "default"));

    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === "function") {
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
    }, function (_aureliaPath) {
      join = _aureliaPath.join;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      if (!window.System || !window.System["import"]) {
        sys = window.System = window.System || {};

        sys.polyfilled = true;
        sys.map = {};
        sys["import"] = function (moduleId) {
          return new Promise(function (resolve, reject) {
            require([moduleId], resolve, reject);
          });
        };
        sys.normalize = function (url) {
          return Promise.resolve(url);
        };
      }Loader.createDefaultLoader = function () {
        return new DefaultLoader();
      };

      DefaultLoader = _export("DefaultLoader", (function (Loader) {
        function DefaultLoader() {
          _classCallCheck(this, DefaultLoader);

          this.baseUrl = System.baseUrl;
          this.baseViewUrl = System.baseViewUrl || System.baseUrl;
          this.registry = {};
        }

        _inherits(DefaultLoader, Loader);

        _prototypeProperties(DefaultLoader, null, {
          loadModule: {
            value: function loadModule(id, baseUrl) {
              var _this = this;

              baseUrl = baseUrl === undefined ? this.baseUrl : baseUrl;

              if (baseUrl && id.indexOf(baseUrl) !== 0) {
                id = join(baseUrl, id);
              }

              return System.normalize(id).then(function (newId) {
                var existing = _this.registry[newId];
                if (existing) {
                  return existing;
                }

                return System["import"](newId).then(function (m) {
                  _this.registry[newId] = m;
                  return ensureOriginOnExports(m, newId);
                });
              });
            },
            writable: true,
            configurable: true
          },
          loadAllModules: {
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
                  if (!_iteratorNormalCompletion && _iterator["return"]) {
                    _iterator["return"]();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }

              return Promise.all(loads);
            },
            writable: true,
            configurable: true
          },
          loadTemplate: {
            value: function loadTemplate(url) {
              if (this.baseViewUrl && url.indexOf(this.baseViewUrl) !== 0) {
                url = join(this.baseViewUrl, url);
              }

              return this.importTemplate(url);
            },
            writable: true,
            configurable: true
          }
        });

        return DefaultLoader;
      })(Loader));
    }
  };
});