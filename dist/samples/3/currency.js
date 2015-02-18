System.register(["numeral"], function (_export) {
  "use strict";

  var numeral, _prototypeProperties, _classCallCheck, CurrencyValueConverter;
  return {
    setters: [function (_numeral) {
      numeral = _numeral["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      CurrencyValueConverter = _export("CurrencyValueConverter", (function () {
        function CurrencyValueConverter() {
          _classCallCheck(this, CurrencyValueConverter);
        }

        _prototypeProperties(CurrencyValueConverter, null, {
          toView: {
            value: function toView(value) {
              return numeral(value).format("($0,0.00)");
            },
            writable: true,
            configurable: true
          }
        });

        return CurrencyValueConverter;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvMy9jdXJyZW5jeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBTyxPQUFPLHlDQUVELHNCQUFzQjs7O0FBRjVCLGFBQU87Ozs7Ozs7QUFFRCw0QkFBc0I7aUJBQXRCLHNCQUFzQjtnQ0FBdEIsc0JBQXNCOzs7NkJBQXRCLHNCQUFzQjtBQUNqQyxnQkFBTTttQkFBQSxnQkFBQyxLQUFLLEVBQUU7QUFDWixxQkFBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzNDOzs7Ozs7ZUFIVSxzQkFBc0IiLCJmaWxlIjoic2FtcGxlcy8zL2N1cnJlbmN5LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=