export class SortValueConverter {
  toView(array, config) {
    var factor = (config.direction || 'ascending') === 'ascending' ? 1 : -1;
    return array
      .slice(0)
      .sort((a, b) => {
        return (a[config.propertyName] - b[config.propertyName]) * factor
      });
  }
}
