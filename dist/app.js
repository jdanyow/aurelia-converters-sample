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
        }, {
          activate: {
            value: function activate() {
              var el,
                  hash = window.location.hash;
              if (!hash) {
                return;
              }setTimeout(function () {
                var el = document.getElementById(hash.substr(1));
                if (el) el.scrollIntoView(true);
              }, 500);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBTyxTQUFTLHlDQUVILEdBQUc7QUFvQmhCLFdBQVMsUUFBUSxHQUFJO0FBQ25CLFFBQUk7QUFDRixhQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUNuQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1YsYUFBTyxJQUFJLENBQUM7S0FDYjtHQUNGOzs7QUE1Qk0sZUFBUzs7Ozs7OztBQUVILFNBQUc7QUFFSCxpQkFGQSxHQUFHO2dDQUFILEdBQUc7O0FBR1osY0FBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLEVBQUUsQ0FBQztTQUMxQjs7NkJBSlUsR0FBRztBQUNQLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sRUFBRSxDQUFDO2FBQUU7Ozs7O0FBSzlCLGtCQUFRO21CQUFBLG9CQUFHO0FBQ1Qsa0JBQUksRUFBRTtrQkFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDcEMsa0JBQUksQ0FBQyxJQUFJO0FBQ1AsdUJBQU87ZUFBQSxBQUVULFVBQVUsQ0FBQyxZQUFNO0FBQ2Ysb0JBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELG9CQUFJLEVBQUUsRUFDSixFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2VBQzNCLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDVDs7Ozs7O2VBaEJVLEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=