import moment from 'moment';

export class DateValueConverter {
  toView(value) {
    return moment(value).format('M/D/YYYY h:mm:ss a');
  }
}
