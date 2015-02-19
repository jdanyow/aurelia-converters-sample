/* */ 
'use strict';
var utils = require("./common\utils");
var rules = require("./rules");
module.exports = Renderer;
function Renderer() {
  this.rules = utils.assign({}, rules);
  this.getBreak = rules.getBreak;
}
Renderer.prototype.renderInline = function(tokens, options, env) {
  var _rules = this.rules;
  var len = tokens.length,
      i = 0;
  var result = '';
  while (len--) {
    result += _rules[tokens[i].type](tokens, i++, options, env, this);
  }
  return result;
};
Renderer.prototype.render = function(tokens, options, env) {
  var _rules = this.rules;
  var len = tokens.length,
      i = -1;
  var result = '';
  while (++i < len) {
    if (tokens[i].type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else {
      result += _rules[tokens[i].type](tokens, i, options, env, this);
    }
  }
  return result;
};
