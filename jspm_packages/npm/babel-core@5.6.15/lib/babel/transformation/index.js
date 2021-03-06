/* */ 
"format cjs";
"use strict";

var _toolsProtectJs2 = require("./../tools/protect.js");

var _toolsProtectJs3 = _interopRequireDefault(_toolsProtectJs2);

exports.__esModule = true;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj["default"] = obj; return newObj; } }

var _pipeline = require("./pipeline");

var _pipeline2 = _interopRequireDefault(_pipeline);

//

var _transformers = require("./transformers");

var _transformers2 = _interopRequireDefault(_transformers);

//

var _transformersDeprecated = require("./transformers/deprecated");

var _transformersDeprecated2 = _interopRequireDefault(_transformersDeprecated);

//

var _transformersAliases = require("./transformers/aliases");

var _transformersAliases2 = _interopRequireDefault(_transformersAliases);

//

var _transformersFilters = require("./transformers/filters");

var filters = _interopRequireWildcard(_transformersFilters);

_toolsProtectJs3["default"](module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pipeline = new _pipeline2["default"]();

for (var key in _transformers2["default"]) {
  var transformer = _transformers2["default"][key];

  if (typeof transformer === "object") {
    var metadata = transformer.metadata = transformer.metadata || {};
    metadata.group = metadata.group || "builtin-basic";
  }
}

pipeline.addTransformers(_transformers2["default"]);
pipeline.addDeprecated(_transformersDeprecated2["default"]);
pipeline.addAliases(_transformersAliases2["default"]);
pipeline.addFilter(filters.internal);
pipeline.addFilter(filters.blacklist);
pipeline.addFilter(filters.whitelist);
pipeline.addFilter(filters.stage);
pipeline.addFilter(filters.optional);

//

var transform = pipeline.transform.bind(pipeline);
transform.fromAst = pipeline.transformFromAst.bind(pipeline);
transform.pipeline = pipeline;
exports["default"] = transform;
module.exports = exports["default"];