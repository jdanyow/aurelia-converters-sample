import {inject, bindable} from 'aurelia-framework';
import {ExampleContext} from './example-context';

@inject(ExampleContext)
export class Example {
  @bindable base;

  constructor(context) {
    this.context = context;
    this.model = null;
    this.view = null;
    this.result = false;
  }

  baseChanged(newValue) {
    this.context.base = newValue;
    this.context.example = this;
  }
}
