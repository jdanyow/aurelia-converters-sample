export class NumericSortValueConverter {
  toView(array, propertyName, direction) {
    var factor = direction === 'ascending' ? 1 : -1;
    return array.sort((a, b) => (a[propertyName] - b[propertyName]) * factor);
  }
}
