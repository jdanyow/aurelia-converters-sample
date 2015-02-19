export class RgbToHexValueConverter {
  toView(rgb) {
    if (rgb && typeof rgb.r === 'number' && typeof rgb.g === 'number' && typeof rgb.b === 'number')
      return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
    return null;
  }

  fromView(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result)
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    return null;
  }
}
