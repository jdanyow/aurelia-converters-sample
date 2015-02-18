import {Behavior} from 'aurelia-framework';

export class Sample {
  static metadata(){
    return Behavior
      .customElement('sample')
      .withProperty('src');
  }

  // static inject() { return [Element]; }
  // constructor(element) {
  //   this.element = element;
  // }

  // valueChanged(newValue) {
  //
  // }
}
