System.register(['bootstrap'], function (_export) {
  'use strict';

  var bootstrap, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

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
            if (!hash) return;

            setTimeout(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUJBRWEsR0FBRzs7Ozs7O0FBbUJoQixXQUFTLFFBQVEsR0FBSTtBQUNuQixRQUFJO0FBQ0YsYUFBTyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDbkMsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNWLGFBQU8sSUFBSSxDQUFDO0tBQ2I7R0FDRjs7Ozs7O0FBekJZLFNBQUc7QUFDSCxpQkFEQSxHQUFHLEdBQ0E7Z0NBREgsR0FBRzs7QUFFWixjQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRSxDQUFDO1NBQzFCOztxQkFIVSxHQUFHOztpQkFLTixvQkFBRztBQUNULGdCQUFJLEVBQUU7Z0JBQUUsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3BDLGdCQUFJLENBQUMsSUFBSSxFQUNQLE9BQU87O0FBRVQsc0JBQVUsQ0FBQyxZQUFNO0FBQ2Ysa0JBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pELGtCQUFJLEVBQUUsRUFDSixFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNCLEVBQUUsR0FBRyxDQUFDLENBQUM7V0FDVDs7O2VBZlUsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJvb3RzdHJhcCBmcm9tICdib290c3RyYXAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmlmcmFtZSA9IGluSWZyYW1lKCk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZSgpIHtcclxuICAgIHZhciBlbCwgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgaWYgKCFoYXNoKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2guc3Vic3RyKDEpKTtcclxuICAgICAgaWYgKGVsKVxyXG4gICAgICAgIGVsLnNjcm9sbEludG9WaWV3KHRydWUpO1xyXG4gICAgfSwgNTAwKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGRldGVjdCB3aGV0aGVyIHdlIGFyZSBob3N0ZWQgaW4gYW4gaUZyYW1lIChnaG9zdCBibG9nIHBvc3QpXHJcbmZ1bmN0aW9uIGluSWZyYW1lICgpIHtcclxuICB0cnkge1xyXG4gICAgcmV0dXJuIHdpbmRvdy5zZWxmICE9PSB3aW5kb3cudG9wO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=