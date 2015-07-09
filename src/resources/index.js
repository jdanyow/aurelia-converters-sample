import {ExampleContext} from './example-context'

export function configure(aurelia) {
  aurelia.container.registerInstance(
    ExampleContext,
    new ExampleContext('https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages'))
  aurelia.globalizeResources('./markdown', './source', './example', './column', './file');
}
