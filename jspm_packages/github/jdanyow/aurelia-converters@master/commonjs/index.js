/* */ 
"format register";
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

exports.install = install;
var moment = _interopRequire(require("moment"));

var numeral = _interopRequire(require("numeral"));

var RelativeValueConverter = exports.RelativeValueConverter = (function () {
  function RelativeValueConverter() {
    _classCallCheck(this, RelativeValueConverter);
  }

  _prototypeProperties(RelativeValueConverter, null, {
    toView: {
      value: function toView(value) {
        if (!value) {
          return null;
        }return moment(value).fromNow();
      },
      writable: true,
      configurable: true
    }
  });

  return RelativeValueConverter;
})();
var DateValueConverter = exports.DateValueConverter = (function () {
  function DateValueConverter() {
    _classCallCheck(this, DateValueConverter);
  }

  _prototypeProperties(DateValueConverter, null, {
    toView: {
      value: function toView(value, format) {
        if (!value) {
          return null;
        }return moment(value).format(format);
      },
      writable: true,
      configurable: true
    }
  });

  return DateValueConverter;
})();
var NumberValueConverter = exports.NumberValueConverter = (function () {
  function NumberValueConverter() {
    _classCallCheck(this, NumberValueConverter);
  }

  _prototypeProperties(NumberValueConverter, null, {
    toView: {
      value: function toView(value, format) {
        if (!value) {
          return null;
        }return numeral(value).format(format);
      },
      writable: true,
      configurable: true
    }
  });

  return NumberValueConverter;
})();
var AgeValueConverter = exports.AgeValueConverter = (function () {
  function AgeValueConverter() {
    _classCallCheck(this, AgeValueConverter);
  }

  _prototypeProperties(AgeValueConverter, null, {
    toView: {
      value: function toView(dob) {
        if (!dob) {
          return null;
        }return Math.floor(moment().diff(moment(dob), "year", false));
      },
      writable: true,
      configurable: true
    }
  });

  return AgeValueConverter;
})();
var SortValueConverter = exports.SortValueConverter = (function () {
  function SortValueConverter() {
    _classCallCheck(this, SortValueConverter);
  }

  _prototypeProperties(SortValueConverter, null, {
    toView: {
      value: function toView(array, propertyName) {
        var comparison = arguments[2] === undefined ? "ordinalIgnoreCase" : arguments[2];
        var direction = arguments[3] === undefined ? "ascending" : arguments[3];
        var directionFactor = direction === "ascending" ? 1 : -1,
            comparer = this[comparison + "Comparison"];
        if (propertyName === undefined) {
          return array.sort(function (a, b) {
            return comparer(a, b) * directionFactor;
          });
        }return array.sort(function (a, b) {
          return comparer(a[propertyName], b[propertyName]) * directionFactor;
        });
      },
      writable: true,
      configurable: true
    },
    ordinalIgnoreCaseComparison: {
      value: function ordinalIgnoreCaseComparison(a, b) {
        if ((a === null || a === undefined) && (b === null || b === undefined)) {
          return 0;
        }if (a === null || a === undefined) {
          return -1;
        }if (b === null || b === undefined) {
          return 1;
        }a = a.toString().toLowerCase();
        b = b.toString().toLowerCase();
        if (a < b) {
          return -1;
        }if (a > b) {
          return 1;
        }return 0;
      },
      writable: true,
      configurable: true
    },
    ordinalComparison: {
      value: function ordinalComparison(a, b) {
        if ((a === null || a === undefined) && (b === null || b === undefined)) {
          return 0;
        }if (a === null || a === undefined) {
          return -1;
        }if (b === null || b === undefined) {
          return 1;
        }a = a.toString();
        b = b.toString();
        if (a < b) {
          return -1;
        }if (a > b) {
          return 1;
        }return 0;
      },
      writable: true,
      configurable: true
    },
    dateComparison: {
      value: function dateComparison(a, b) {
        if ((a === null || a === undefined) && (b === null || b === undefined)) {
          return 0;
        }if (a === null || a === undefined) {
          return -1;
        }if (b === null || b === undefined) {
          return 1;
        }return moment(b).diff(moment(a));
      },
      writable: true,
      configurable: true
    },
    numberComparison: {
      value: function numberComparison(a, b) {
        if ((a === null || a === undefined) && (b === null || b === undefined)) {
          return 0;
        }if (a === null || a === undefined) {
          return -1;
        }if (b === null || b === undefined) {
          return 1;
        }return a - b;
      },
      writable: true,
      configurable: true
    }
  });

  return SortValueConverter;
})();
function install(aurelia) {
  aurelia.withResources(RelativeValueConverter, DateValueConverter, NumberValueConverter, AgeValueConverter, SortValueConverter);
}
Object.defineProperty(exports, "__esModule", {
  value: true
});