import {HttpClient} from 'aurelia-http-client';

export class AureliaRepositories {
  constructor() {
    this.repos = [];
  }

  activate() {
    return new HttpClient()
      .get('https://api.github.com/orgs/aurelia/repos')
      .then(response => this.repos = response.content);
  }
}
