import {inject, bindable} from 'aurelia-framework';
import {ExampleContext} from './example-context';

@inject(ExampleContext)
export class Example {
  @bindable base;
  context;
  model = null;
  view = null;
  result = false;

  constructor(context) {
    this.context = context;
  }

  baseChanged(newValue) {
    this.context.base = newValue;
    this.context.example = this;
  }
}
