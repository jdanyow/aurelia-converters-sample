System.register(["./date-format", "./number-format"], function (_export) {
  "use strict";

  var DateFormatValueConverter, NumberFormatValueConverter;
  _export("install", install);

  function install(aurelia) {
    aurelia.withResources(DateFormatValueConverter, NumberFormatValueConverter);
  }
  return {
    setters: [function (_dateFormat) {
      DateFormatValueConverter = _dateFormat.DateFormatValueConverter;
    }, function (_numberFormat) {
      NumberFormatValueConverter = _numberFormat.NumberFormatValueConverter;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbXBsZXMvOC9yZXNvdXJjZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQVEsd0JBQXdCLEVBQ3hCLDBCQUEwQjtxQkFFbEIsT0FBTzs7QUFBaEIsV0FBUyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBRS9CLFdBQU8sQ0FBQyxhQUFhLENBQ25CLHdCQUF3QixFQUN4QiwwQkFBMEIsQ0FBQyxDQUFDO0dBQy9COzs7QUFSTyw4QkFBd0IsZUFBeEIsd0JBQXdCOztBQUN4QixnQ0FBMEIsaUJBQTFCLDBCQUEwQiIsImZpbGUiOiJzYW1wbGVzLzgvcmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=