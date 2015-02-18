System.register(["aurelia-framework", "commonmark"], function (_export) {
  "use strict";

  var Behavior, commonmark, _prototypeProperties, _classCallCheck, reader, writer, process, httpClient, Markdown;
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

      httpClient = new HttpClient().configure(function (builder) {
        return builder.withBaseUrl("src/").withResponseType("text");
      });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9tYXJrZG93bi1iZWhhdmlvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1QsVUFBVSx5Q0FFYixNQUFNLEVBQ04sTUFBTSxFQUNOLE9BQU8sRUFDUCxVQUFVLEVBRUQsUUFBUTs7O0FBUmIsY0FBUSxxQkFBUixRQUFROztBQUNULGdCQUFVOzs7Ozs7O0FBRWIsWUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUNoQyxZQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFO0FBQ3RDLGFBQU8sR0FBRyxVQUFBLFFBQVE7ZUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7T0FBQTs7QUFDM0QsZ0JBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU87ZUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztPQUFBLENBQUM7QUFFL0YsY0FBUTtBQVFSLGlCQVJBLFFBQVEsQ0FRUCxPQUFPO2dDQVJSLFFBQVE7O0FBU2pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzs2QkFWVSxRQUFRO0FBQ1osa0JBQVE7bUJBQUEsb0JBQUU7QUFDZixxQkFBTyxRQUFRLENBQ1osZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQzVCLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3REOzs7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQUU7Ozs7O0FBS3JDLHNCQUFZO21CQUFBLHNCQUFDLFFBQVEsRUFBRTtBQUVyQixrQkFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4QyxrQkFBSSxNQUFNLEVBQUU7QUFDVix3QkFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2VBQy9GOztBQUdELGtCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ2xEOzs7Ozs7ZUFyQlUsUUFBUSIsImZpbGUiOiJyZXNvdXJjZXMvbWFya2Rvd24tYmVoYXZpb3IuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==