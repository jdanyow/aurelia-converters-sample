import {DateFormatValueConverter} from './date-format';
import {NumberFormatValueConverter} from './number-format';

export function install(aurelia) {
  // register the value converters globally.
  aurelia.withResources(
    DateFormatValueConverter,
    NumberFormatValueConverter);
}
