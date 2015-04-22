System.register(['bootstrap'], function (_export) {
  var bootstrap, _classCallCheck, _createClass, App;

  function inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  return {
    setters: [function (_bootstrap) {
      bootstrap = _bootstrap['default'];
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      App = (function () {
        function App() {
          _classCallCheck(this, App);

          this.iframe = inIframe();
        }

        _createClass(App, [{
          key: 'activate',
          value: function activate() {
            var el,
                hash = window.location.hash;
            if (!hash) {
              return;
            }setTimeout(function () {
              var el = document.getElementById(hash.substr(1));
              if (el) el.scrollIntoView(true);
            }, 500);
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO2dEQUVhLEdBQUc7O0FBbUJoQixXQUFTLFFBQVEsR0FBSTtBQUNuQixRQUFJO0FBQ0YsYUFBTyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDbkMsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNWLGFBQU8sSUFBSSxDQUFDO0tBQ2I7R0FDRjs7Ozs7Ozs7Ozs7O0FBekJZLFNBQUc7QUFDSCxpQkFEQSxHQUFHLEdBQ0E7Z0NBREgsR0FBRzs7QUFFWixjQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDO1NBQzFCOztxQkFIVSxHQUFHOztpQkFLTixvQkFBRztBQUNULGdCQUFJLEVBQUU7Z0JBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3BDLGdCQUFJLENBQUMsSUFBSTtBQUNQLHFCQUFPO2FBQUEsQUFFVCxVQUFVLENBQUMsWUFBTTtBQUNmLGtCQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRCxrQkFBSSxFQUFFLEVBQ0osRUFBRSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1dBQ1Q7OztlQWZVLEdBQUc7OztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=