System.register(["aurelia-framework", "commonmark"], function (_export) {
  "use strict";

  var Behavior, commonmark, _prototypeProperties, _classCallCheck, reader, writer, process, Markdown;
  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_commonmark) {
      commonmark = _commonmark["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();
      process = function (markdown) {
        return writer.render(reader.parse(markdown));
      };

      Markdown = _export("Markdown", (function () {
        function Markdown(element) {
          _classCallCheck(this, Markdown);

          this.element = element;
        }

        _prototypeProperties(Markdown, {
          metadata: {
            value: function metadata() {
              return Behavior.attachedBehavior("markdown").withProperty("value", "valueChanged", "markdown");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          valueChanged: {
            value: function valueChanged(newValue) {
              var result = /^( +)\S/im.exec(newValue);
              if (result) {
                newValue = newValue.replace(new RegExp("^ {" + result[1].length.toString() + "}", "gim"), "");
              }

              this.element.innerHTML = process(newValue || "");
            },
            writable: true,
            configurable: true
          }
        });

        return Markdown;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9tYXJrZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1QsVUFBVSx5Q0FFYixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFFRSxRQUFROzs7QUFQYixjQUFRLHFCQUFSLFFBQVE7O0FBQ1QsZ0JBQVU7Ozs7Ozs7QUFFYixZQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQ2hDLFlBQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLEVBQUU7QUFDdEMsYUFBTyxHQUFHLFVBQUEsUUFBUTtlQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUFBOztBQUVsRCxjQUFRO0FBUVIsaUJBUkEsUUFBUSxDQVFQLE9BQU87Z0NBUlIsUUFBUTs7QUFTakIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzZCQVZVLFFBQVE7QUFDWixrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FDNUIsWUFBWSxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDdEQ7Ozs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFBRTs7Ozs7QUFLckMsc0JBQVk7bUJBQUEsc0JBQUMsUUFBUSxFQUFFO0FBRXJCLGtCQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hDLGtCQUFJLE1BQU0sRUFBRTtBQUNWLHdCQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7ZUFDL0Y7O0FBR0Qsa0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUM7YUFDbEQ7Ozs7OztlQXJCVSxRQUFRIiwiZmlsZSI6InJlc291cmNlcy9tYXJrZG93bi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9