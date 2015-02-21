import {Behavior} from 'aurelia-framework';
import {Settings} from './settings';

var extensionLanguageMap = {
  js: 'javascript',
  html: 'markup'
};

function getLanguage(filename) {
  var extension = (/\.(\w+)$/).exec(filename)[1].toLowerCase();
  return extensionLanguageMap[extension];
}

export class Example {
  static metadata(){
    return Behavior
      .customElement('example')
      .withProperty('base', 'baseChanged')
      .skipContentProcessing();
  }

  static inject() { return [Element, Settings]; }
  constructor(element, settings) {
    var c, cc, f, ff, fileElements;

    this.element = element;
    this.settings = settings;
    this.columns = [];
    this.view = null;
    this.viewModel = null;
    this.result = false;
  }

  baseChanged(newValue) {
    var c, cc, f, ff, fileElements, files;
    for (c = 0, cc = this.element.children.length; c < cc; c++) {
      this.columns.push([]);
      fileElements = this.element.children[c].children;
      for(f = 0, ff = fileElements.length; f < ff; f++) {
        this.columns[c].push(this.getFileInfo(fileElements[f]));
      }
    }

    var files = [];
    files = files.concat.apply(files, this.columns);
    this.view = files.filter(f => f.isView)[0];
    this.viewModel = files.filter(f => f.isViewModel)[0];
    this.result = this.view && this.viewModel;
  }

  getFileInfo(el) {
    var src, moduleId, isView = false, isViewModel = false;
    if (el.attributes['src']) {
      src = el.attributes['src'].value;
      moduleId = src.substr(0, src.indexOf('.') - 1);
      isView = !!el.attributes['view'];
      isViewModel = !!el.attributes['view-model'];
    } else if (el.localName === 'view') {
      src = 'view.html';
      moduleId = 'view';
      isView = true;
    } else if (el.localName === 'view-model') {
      src = 'view-model.js';
      moduleId = 'view-model';
      isViewModel = true;
    } else {
      src = el.localName + '.js';
      moduleId = el.localName;
    }

    return {
      name: src,
      moduleId: this.base + '/' + moduleId,
      language: getLanguage(src),
      url: 'src/' + this.base + '/' + src,
      repoUrl: this.settings.githubBase + '/src/' + this.base + '/' + src,
      isView: isView,
      isViewModel: isViewModel
    };
  }
}
