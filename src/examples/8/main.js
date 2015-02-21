export function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources()
    .router()
    .eventAggregator()
    .plugin('./resources/index'); // install our app's resources

  aurelia.start().then(a => a.setRoot('app', document.body));
}
