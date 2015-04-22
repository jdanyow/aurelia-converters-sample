export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('./resources/index'); // install our app's resources

  aurelia.start().then(a => a.setRoot());
}
