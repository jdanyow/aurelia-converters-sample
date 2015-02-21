System.register(["aurelia-framework", "./settings"], function (_export) {
  "use strict";

  var Behavior, Settings, _prototypeProperties, _classCallCheck, extensionLanguageMap, Example;


  function getLanguage(filename) {
    var extension = /\.(\w+)$/.exec(filename)[1].toLowerCase();
    return extensionLanguageMap[extension];
  }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_settings) {
      Settings = _settings.Settings;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      extensionLanguageMap = {
        js: "javascript",
        html: "markup"
      };
      Example = _export("Example", (function () {
        function Example(element, settings) {
          _classCallCheck(this, Example);

          var c, cc, f, ff, fileElements;

          this.element = element;
          this.settings = settings;
          this.columns = [];
          this.view = null;
          this.viewModel = null;
          this.result = false;
        }

        _prototypeProperties(Example, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("example").withProperty("base", "baseChanged").skipContentProcessing();
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element, Settings];
            },
            writable: true,
            configurable: true
          }
        }, {
          baseChanged: {
            value: function baseChanged(newValue) {
              var c, cc, f, ff, fileElements, files;
              for (c = 0, cc = this.element.children.length; c < cc; c++) {
                this.columns.push([]);
                fileElements = this.element.children[c].children;
                for (f = 0, ff = fileElements.length; f < ff; f++) {
                  this.columns[c].push(this.getFileInfo(fileElements[f]));
                }
              }

              var files = [];
              files = files.concat.apply(files, this.columns);
              this.view = files.filter(function (f) {
                return f.isView;
              })[0];
              this.viewModel = files.filter(function (f) {
                return f.isViewModel;
              })[0];
              this.result = this.view && this.viewModel;
            },
            writable: true,
            configurable: true
          },
          getFileInfo: {
            value: function getFileInfo(el) {
              var src,
                  moduleId,
                  isView = false,
                  isViewModel = false;
              if (el.attributes.src) {
                src = el.attributes.src.value;
                moduleId = src.substr(0, src.indexOf(".") - 1);
                isView = !!el.attributes.view;
                isViewModel = !!el.attributes["view-model"];
              } else if (el.localName === "view") {
                src = "view.html";
                moduleId = "view";
                isView = true;
              } else if (el.localName === "view-model") {
                src = "view-model.js";
                moduleId = "view-model";
                isViewModel = true;
              } else {
                src = el.localName + ".js";
                moduleId = el.localName;
              }

              return {
                name: src,
                moduleId: this.base + "/" + moduleId,
                language: getLanguage(src),
                url: "src/" + this.base + "/" + src,
                repoUrl: this.settings.githubBase + "/src/" + this.base + "/" + src,
                isView: isView,
                isViewModel: isViewModel
              };
            },
            writable: true,
            configurable: true
          }
        });

        return Example;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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Qzt1QkFBSSxDQUFDLENBQUMsV0FBVztlQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRCxrQkFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDM0M7Ozs7QUFFRCxxQkFBVzttQkFBQSxxQkFBQyxFQUFFLEVBQUU7QUFDZCxrQkFBSSxHQUFHO2tCQUFFLFFBQVE7a0JBQUUsTUFBTSxHQUFHLEtBQUs7a0JBQUUsV0FBVyxHQUFHLEtBQUssQ0FBQztBQUN2RCxrQkFBSSxFQUFFLENBQUMsVUFBVSxJQUFPLEVBQUU7QUFDeEIsbUJBQUcsR0FBRyxFQUFFLENBQUMsVUFBVSxJQUFPLENBQUMsS0FBSyxDQUFDO0FBQ2pDLHdCQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvQyxzQkFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxLQUFRLENBQUM7QUFDakMsMkJBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztlQUM3QyxNQUFNLElBQUksRUFBRSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7QUFDbEMsbUJBQUcsR0FBRyxXQUFXLENBQUM7QUFDbEIsd0JBQVEsR0FBRyxNQUFNLENBQUM7QUFDbEIsc0JBQU0sR0FBRyxJQUFJLENBQUM7ZUFDZixNQUFNLElBQUksRUFBRSxDQUFDLFNBQVMsS0FBSyxZQUFZLEVBQUU7QUFDeEMsbUJBQUcsR0FBRyxlQUFlLENBQUM7QUFDdEIsd0JBQVEsR0FBRyxZQUFZLENBQUM7QUFDeEIsMkJBQVcsR0FBRyxJQUFJLENBQUM7ZUFDcEIsTUFBTTtBQUNMLG1CQUFHLEdBQUcsRUFBRSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7QUFDM0Isd0JBQVEsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO2VBQ3pCOztBQUVELHFCQUFPO0FBQ0wsb0JBQUksRUFBRSxHQUFHO0FBQ1Qsd0JBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxRQUFRO0FBQ3BDLHdCQUFRLEVBQUUsV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUMxQixtQkFBRyxFQUFFLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQ25DLHVCQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDbkUsc0JBQU0sRUFBRSxNQUFNO0FBQ2QsMkJBQVcsRUFBRSxXQUFXO2VBQ3pCLENBQUM7YUFDSDs7Ozs7O2VBbEVVLE9BQU8iLCJmaWxlIjoicmVzb3VyY2VzL2V4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==