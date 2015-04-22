System.register(['./example-context'], function (_export) {
  var ExampleContext;

  _export('install', install);

  function install(aurelia) {
    aurelia.container.registerInstance(ExampleContext, new ExampleContext('https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages'));
    aurelia.globalizeResources('./markdown', './source', './example', './column', './file');
  }

  return {
    setters: [function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      'use strict';
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7cUJBRWdCLE9BQU87O0FBQWhCLFdBQVMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUMvQixXQUFPLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUNoQyxjQUFjLEVBQ2QsSUFBSSxjQUFjLENBQUMsb0VBQW9FLENBQUMsQ0FBQyxDQUFBO0FBQzNGLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7R0FDekY7Ozs7dUNBUE8sY0FBYyIsImZpbGUiOiJyZXNvdXJjZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9