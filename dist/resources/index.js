System.register(["./markdown", "./source", "./example", "./example-context", "./column", "./file"], function (_export) {
  "use strict";

  var Markdown, Source, Example, ExampleContext, Column, File;
  _export("install", install);

  function install(aurelia) {
    aurelia.withResources(Markdown, Source);

    aurelia.container.registerInstance(ExampleContext, new ExampleContext("https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages"));
    aurelia.withResources(Markdown, Source, Example, Column, File);
  }
  return {
    setters: [function (_markdown) {
      Markdown = _markdown.Markdown;
    }, function (_source) {
      Source = _source.Source;
    }, function (_example) {
      Example = _example.Example;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }, function (_column) {
      Column = _column.Column;
    }, function (_file) {
      File = _file.File;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxRQUFRLEVBQ1IsTUFBTSxFQUNOLE9BQU8sRUFDUCxjQUFjLEVBQ2QsTUFBTSxFQUNOLElBQUk7cUJBRUksT0FBTzs7QUFBaEIsV0FBUyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQy9CLFdBQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUV4QyxXQUFPLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUNoQyxjQUFjLEVBQ2QsSUFBSSxjQUFjLENBQUMsb0VBQW9FLENBQUMsQ0FBQyxDQUFBO0FBQzNGLFdBQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0dBQ2hFOzs7QUFkTyxjQUFRLGFBQVIsUUFBUTs7QUFDUixZQUFNLFdBQU4sTUFBTTs7QUFDTixhQUFPLFlBQVAsT0FBTzs7QUFDUCxvQkFBYyxtQkFBZCxjQUFjOztBQUNkLFlBQU0sV0FBTixNQUFNOztBQUNOLFVBQUksU0FBSixJQUFJIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9