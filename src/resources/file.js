import {bindable, inject} from 'aurelia-framework';
import {ExampleContext} from './example-context';

var extensionLanguageMap = {
  js: 'javascript',
  html: 'markup'
};

function getLanguage(filename) {
  var extension = (/\.(\w+)$/).exec(filename)[1].toLowerCase();
  return extensionLanguageMap[extension];
}

@inject(ExampleContext)
export class File {
  @bindable src;
  @bindable view;
  @bindable model;
  example;
  base;
  githubBase;

  constructor(context) {
    this.example = context.example;
    this.base = context.base;
    this.githubBase = context.githubBase;
    this.info = null;
  }

  bind() {
    var src = this.src, example = this.example;

    this.info = {
      name: src,
      moduleId: this.base + '/' + src.substr(0, src.indexOf('.')),
      language: getLanguage(src),
      url: 'src/' + this.base + '/' + src,
      repoUrl: this.githubBase + '/src/' + this.base + '/' + src
    };

    if (this.view === 'true')
      example.view = this.info;

    if (this.model === 'true')
      example.model = this.info;

    example.result = example.view && example.model;
  }
}
