import bootstrap from 'bootstrap';

export class App {
  static inject() { return []; }
  constructor() {
    this.iframe = inIframe();
  }
}

// detect whether we are hosted in an iFrame (ghost blog post)
function inIframe () {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
