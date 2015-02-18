System.register(["./sample", "./markdown", "./source"], function (_export) {
  "use strict";

  var Sample, Markdown, Source;
  _export("install", install);

  function install(aurelia) {
    aurelia.withResources(Markdown, Source, Sample);
  }
  return {
    setters: [function (_sample) {
      Sample = _sample.Sample;
    }, function (_markdown) {
      Markdown = _markdown.Markdown;
    }, function (_source) {
      Source = _source.Source;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU07cUJBRUUsT0FBTzs7QUFBaEIsV0FBUyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQy9CLFdBQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztHQUNqRDs7O0FBTk8sWUFBTSxXQUFOLE1BQU07O0FBQ04sY0FBUSxhQUFSLFFBQVE7O0FBQ1IsWUFBTSxXQUFOLE1BQU0iLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=