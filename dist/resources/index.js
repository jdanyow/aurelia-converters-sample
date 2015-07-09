System.register(['./example-context'], function (_export) {
  'use strict';

  var ExampleContext;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.container.registerInstance(ExampleContext, new ExampleContext('https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages'));
    aurelia.globalizeResources('./markdown', './source', './example', './column', './file');
  }

  return {
    setters: [function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozt1QkFFZ0IsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQ2hDLGNBQWMsRUFDZCxJQUFJLGNBQWMsQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDLENBQUE7QUFDM0YsV0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztHQUN6Rjs7Ozt1Q0FQTyxjQUFjIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXhhbXBsZUNvbnRleHR9IGZyb20gJy4vZXhhbXBsZS1jb250ZXh0J1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XHJcbiAgYXVyZWxpYS5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShcclxuICAgIEV4YW1wbGVDb250ZXh0LFxyXG4gICAgbmV3IEV4YW1wbGVDb250ZXh0KCdodHRwczovL2dpdGh1Yi5jb20vamRhbnlvdy9hdXJlbGlhLWNvbnZlcnRlcnMtc2FtcGxlL2Jsb2IvZ2gtcGFnZXMnKSlcclxuICBhdXJlbGlhLmdsb2JhbGl6ZVJlc291cmNlcygnLi9tYXJrZG93bicsICcuL3NvdXJjZScsICcuL2V4YW1wbGUnLCAnLi9jb2x1bW4nLCAnLi9maWxlJyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9