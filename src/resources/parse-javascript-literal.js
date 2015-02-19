// this is a hack to enable assigning javascript objects to element properties
// without using a binding expression.
export class ParseJavascriptLiteralValueConverter {
  toView(value) {
    var x;
    if (value) {
      eval('x=' + value);
      return x;
    }
    return value;
  }
}
