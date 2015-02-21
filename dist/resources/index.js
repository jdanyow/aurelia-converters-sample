System.register(["./sample", "./markdown", "./source", "./example", "./settings"], function (_export) {
  "use strict";

  var Sample, Markdown, Source, Example, Settings;
  _export("install", install);

  function install(aurelia) {
    aurelia.withResources(Markdown, Source);

    aurelia.container.registerInstance(Settings, new Settings("https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages"));
    aurelia.withResources(Example);
  }
  return {
    setters: [function (_sample) {
      Sample = _sample.Sample;
    }, function (_markdown) {
      Markdown = _markdown.Markdown;
    }, function (_source) {
      Source = _source.Source;
    }, function (_example) {
      Example = _example.Example;
    }, function (_settings) {
      Settings = _settings.Settings;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFFTixPQUFPLEVBQ1AsUUFBUTtxQkFFQSxPQUFPOztBQUFoQixXQUFTLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDL0IsV0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRXhDLFdBQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQ2hDLFFBQVEsRUFDUixJQUFJLFFBQVEsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDLENBQUE7QUFDckYsV0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUNoQzs7O0FBZE8sWUFBTSxXQUFOLE1BQU07O0FBQ04sY0FBUSxhQUFSLFFBQVE7O0FBQ1IsWUFBTSxXQUFOLE1BQU07O0FBRU4sYUFBTyxZQUFQLE9BQU87O0FBQ1AsY0FBUSxhQUFSLFFBQVEiLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=