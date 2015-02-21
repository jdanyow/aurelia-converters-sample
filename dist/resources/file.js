System.register(["aurelia-framework", "./example-context"], function (_export) {
  "use strict";

  var Behavior, ExampleContext, _prototypeProperties, _classCallCheck, extensionLanguageMap, File;


  function getLanguage(filename) {
    var extension = /\.(\w+)$/.exec(filename)[1].toLowerCase();
    return extensionLanguageMap[extension];
  }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      extensionLanguageMap = {
        js: "javascript",
        html: "markup"
      };
      File = _export("File", (function () {
        function File(context) {
          _classCallCheck(this, File);

          this.context = context;
          this.info = null;
        }

        _prototypeProperties(File, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("file").withProperty("src", "propertyChanged").withProperty("view", "propertyChanged").withProperty("model", "propertyChanged");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [ExampleContext];
            },
            writable: true,
            configurable: true
          }
        }, {
          propertyChanged: {
            value: function propertyChanged() {
              var src = this.src,
                  context = this.context,
                  example = context.example;

              this.info = {
                name: src,
                moduleId: context.base + "/" + src.substr(0, src.indexOf(".")),
                language: getLanguage(src),
                url: "src/" + context.base + "/" + src,
                repoUrl: context.githubBase + "/src/" + context.base + "/" + src
              };

              if (this.view === "true") example.view = this.info;

              if (this.model === "true") example.model = this.info;

              example.result = example.view && example.model;
            },
            writable: true,
            configurable: true
          }
        });

        return File;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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