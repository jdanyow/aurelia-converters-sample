export class SortValueConverter {
  toView(array, propertyName, direction) {
    var factor = direction === 'ascending' ? 1 : -1;
    return array
      .slice(0)
      .sort((a, b) => {
        return (a[propertyName] - b[propertyName]) * factor
      });
  }
}
