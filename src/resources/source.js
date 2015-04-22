import {inject, customAttribute} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

var httpClient = new HttpClient().configure(builder => builder.withResponseType('text'));

@customAttribute('source')
@inject(Element)
export class Source {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue) {
    if (!newValue) {
      this.element.innerHTML = '';
      return;
    }

    httpClient.get(newValue)
      .then(response => {
        this.element.textContent = response.content.trim();
        Prism.highlightElement(this.element);
      });
  }
}
