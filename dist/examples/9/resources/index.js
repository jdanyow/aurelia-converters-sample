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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzkvcmVzb3VyY2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUFRLHdCQUF3QixFQUN4QiwwQkFBMEI7cUJBRWxCLE9BQU87O0FBQWhCLFdBQVMsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUUvQixXQUFPLENBQUMsYUFBYSxDQUNuQix3QkFBd0IsRUFDeEIsMEJBQTBCLENBQUMsQ0FBQztHQUMvQjs7O0FBUk8sOEJBQXdCLGVBQXhCLHdCQUF3Qjs7QUFDeEIsZ0NBQTBCLGlCQUExQiwwQkFBMEIiLCJmaWxlIjoiZXhhbXBsZXMvOS9yZXNvdXJjZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==