System.register(["bootstrap"], function (_export) {
  "use strict";

  var bootstrap, _prototypeProperties, _classCallCheck, App;
  function inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  return {
    setters: [function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App() {
          _classCallCheck(this, App);

          this.iframe = inIframe();
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [];
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBTyxTQUFTLHlDQUVILEdBQUc7QUFRaEIsV0FBUyxRQUFRLEdBQUk7QUFDbkIsUUFBSTtBQUNGLGFBQU8sTUFBTSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ25DLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDVixhQUFPLElBQUksQ0FBQztLQUNiO0dBQ0Y7OztBQWhCTSxlQUFTOzs7Ozs7O0FBRUgsU0FBRztBQUVILGlCQUZBLEdBQUc7Z0NBQUgsR0FBRzs7QUFHWixjQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDO1NBQzFCOzs2QkFKVSxHQUFHO0FBQ1AsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxFQUFFLENBQUM7YUFBRTs7Ozs7O2VBRG5CLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=