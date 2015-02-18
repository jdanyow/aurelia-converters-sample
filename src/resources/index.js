import {Sample} from './sample';
import {Markdown} from './markdown';
import {Source} from './source';

export function install(aurelia) {
  aurelia.withResources(Markdown, Source, Sample);
}
