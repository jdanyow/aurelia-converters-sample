/* */ 
System.register(['core-js', './map-change-records', './collection-observation'], function (_export) {
  var core, getChangeRecords, ModifyCollectionObserver, _classCallCheck, _createClass, _get, _inherits, mapProto, ModifyMapObserver;

  _export('getMapObserver', getMapObserver);

  function getMapObserver(taskQueue, map) {
    return ModifyMapObserver.create(taskQueue, map);
  }

  return {
    setters: [function (_coreJs) {
      core = _coreJs['default'];
    }, function (_mapChangeRecords) {
      getChangeRecords = _mapChangeRecords.getChangeRecords;
    }, function (_collectionObservation) {
      ModifyCollectionObserver = _collectionObservation.ModifyCollectionObserver;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

      _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      mapProto = Map.prototype;

      ModifyMapObserver = (function (_ModifyCollectionObserver) {
        function ModifyMapObserver(taskQueue, map) {
          _classCallCheck(this, ModifyMapObserver);

          _get(Object.getPrototypeOf(ModifyMapObserver.prototype), 'constructor', this).call(this, taskQueue, map);
        }

        _inherits(ModifyMapObserver, _ModifyCollectionObserver);

        _createClass(ModifyMapObserver, null, [{
          key: 'create',
          value: function create(taskQueue, map) {
            var observer = new ModifyMapObserver(taskQueue, map);

            map.set = function () {
              var oldValue = map.get(arguments[0]);
              var type = oldValue ? 'update' : 'add';
              var methodCallResult = mapProto.set.apply(map, arguments);
              observer.addChangeRecord({
                type: type,
                object: map,
                key: arguments[0],
                oldValue: oldValue
              });
              return methodCallResult;
            };

            map['delete'] = function () {
              var oldValue = map.get(arguments[0]);
              var methodCallResult = mapProto['delete'].apply(map, arguments);
              observer.addChangeRecord({
                type: 'delete',
                object: map,
                key: arguments[0],
                oldValue: oldValue
              });
              return methodCallResult;
            };

            map.clear = function () {
              var methodCallResult = mapProto.clear.apply(map, arguments);
              observer.addChangeRecord({
                type: 'clear',
                object: map
              });
              return methodCallResult;
            };

            return observer;
          }
        }]);

        return ModifyMapObserver;
      })(ModifyCollectionObserver);
    }
  };
});