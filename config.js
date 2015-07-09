System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  "paths": {
    "*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.14.0",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
    "aurelia-framework": "github:aurelia/framework@0.13.2",
    "aurelia-http-client": "github:aurelia/http-client@0.10.0",
    "aurelia-router": "github:aurelia/router@0.10.1",
    "babel": "npm:babel-core@5.6.15",
    "babel-runtime": "npm:babel-runtime@5.6.15",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "commonmark": "npm:commonmark@0.18.2",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "font-awesome": "npm:font-awesome@4.3.0",
    "moment": "github:moment/moment@2.10.3",
    "numeral": "npm:numeral@1.5.3",
    "github:aurelia/binding@0.8.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.14.0": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.1",
      "aurelia-framework": "github:aurelia/framework@0.13.2",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.1",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.0",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.0",
      "aurelia-router": "github:aurelia/router@0.10.1",
      "aurelia-templating": "github:aurelia/templating@0.13.2",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.0",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.0",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.0": {
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.1": {
      "aurelia-logging": "github:aurelia/logging@0.6.0"
    },
    "github:aurelia/framework@0.13.2": {
      "aurelia-binding": "github:aurelia/binding@0.8.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-loader": "github:aurelia/loader@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.2",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.1": {
      "aurelia-history": "github:aurelia/history@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.10.0": {
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.0": {
      "aurelia-loader": "github:aurelia/loader@0.8.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0"
    },
    "github:aurelia/loader@0.8.0": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.0": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.1",
      "aurelia-history": "github:aurelia/history@0.6.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.1",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.2"
    },
    "github:aurelia/templating-resources@0.13.0": {
      "aurelia-binding": "github:aurelia/binding@0.8.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "aurelia-templating": "github:aurelia/templating@0.13.2",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.0": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-router": "github:aurelia/router@0.10.1",
      "aurelia-templating": "github:aurelia/templating@0.13.2"
    },
    "github:aurelia/templating@0.13.2": {
      "aurelia-binding": "github:aurelia/binding@0.8.1",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.0",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.0",
      "aurelia-logging": "github:aurelia/logging@0.6.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.0",
      "aurelia-path": "github:aurelia/path@0.8.0",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.0",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.3.1"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.5": {
      "jquery": "github:components/jquery@2.1.4"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer@3.3.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:commonmark@0.18.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.3.0": {
      "css": "github:systemjs/plugin-css@0.1.13"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:numeral@1.5.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

