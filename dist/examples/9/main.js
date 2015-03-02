System.register([], function (_export) {
  "use strict";

  _export("configure", configure);

  function configure(aurelia) {
    aurelia.use.defaultBindingLanguage().defaultResources().router().eventAggregator().plugin("./resources/index");

    aurelia.start().then(function (a) {
      return a.setRoot("app", document.body);
    });
  }
  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzLzkvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUJBQWdCLFNBQVM7O0FBQWxCLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNqQyxXQUFPLENBQUMsR0FBRyxDQUNSLHNCQUFzQixFQUFFLENBQ3hCLGdCQUFnQixFQUFFLENBQ2xCLE1BQU0sRUFBRSxDQUNSLGVBQWUsRUFBRSxDQUNqQixNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7QUFFL0IsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0dBQzVEIiwiZmlsZSI6ImV4YW1wbGVzLzkvbWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9