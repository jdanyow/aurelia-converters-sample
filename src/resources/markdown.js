import {Behavior} from 'aurelia-framework';
import commonmark from 'commonmark';

var reader = new commonmark.Parser(),
    writer = new commonmark.HtmlRenderer(),
    process = markdown => writer.render(reader.parse(markdown));

export class Markdown {
  static metadata(){
    return Behavior
      .attachedBehavior('markdown')
      .withProperty('value', 'valueChanged', 'markdown');
  }

  static inject() { return [Element]; }
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue) {
    // remove leading indentation.
    var result = /^( +)\S/im.exec(newValue);
    if (result) {
      newValue = newValue.replace(new RegExp('^ {' + result[1].length.toString() + '}', 'gim'), '');
    }

    // convert the markdown to html.
    this.element.innerHTML = process(newValue || '');
  }
}
