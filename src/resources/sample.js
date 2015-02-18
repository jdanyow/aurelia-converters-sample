import {Behavior} from 'aurelia-framework';

export class Sample {
  static metadata(){
    return Behavior
      .customElement('sample')
      .withProperty('src');
  }

  constructor(element) {
    // todo: something more clever:
    this.githubBase = 'https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages';
  }
}
