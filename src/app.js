import bootstrap from 'bootstrap';

export class App {
  constructor() {
    this.iframe = inIframe();
  }

  activate() {
    var el, hash = window.location.hash;
    if (!hash)
      return;

    setTimeout(() => {
      var el = document.getElementById(hash.substr(1));
      if (el)
        el.scrollIntoView(true);
    }, 500);
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
