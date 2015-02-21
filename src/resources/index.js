import {Sample} from './sample';
import {Markdown} from './markdown';
import {Source} from './source';

import {Example} from './example';
import {Settings} from './settings'

export function install(aurelia) {
  aurelia.withResources(Markdown, Source);

  aurelia.container.registerInstance(
    Settings,
    new Settings('https://github.com/jdanyow/aurelia-converters-sample/blob/gh-pages'))
  aurelia.withResources(Example);
}
