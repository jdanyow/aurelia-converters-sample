import numeral from 'numeral';

export class CurrencyValueConverter {
  toView(value) {
    return numeral(value).format('($0,0.00)');
  }
}
