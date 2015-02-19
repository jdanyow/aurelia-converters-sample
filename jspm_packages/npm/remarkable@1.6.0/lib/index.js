/* */ 
'use strict';
var assign = require("./common\utils").assign;
var Renderer = require("./renderer");
var ParserCore = require("./parser_core");
var ParserBlock = require("./parser_block");
var ParserInline = require("./parser_inline");
var Ruler = require("./ruler");
var config = {
  'default': require("./configs\default"),
  'full': require("./configs\full"),
  'commonmark': require("./configs\commonmark")
};
function StateCore(self, str, env) {
  this.src = str;
  this.env = env;
  this.options = self.options;
  this.tokens = [];
  this.inlineMode = false;
  this.inline = self.inline;
  this.block = self.block;
  this.renderer = self.renderer;
  this.typographer = self.typographer;
}
function Remarkable(preset, options) {
  if (typeof preset !== 'string') {
    options = preset;
    preset = 'default';
  }
  this.inline = new ParserInline();
  this.block = new ParserBlock();
  this.core = new ParserCore();
  this.renderer = new Renderer();
  this.ruler = new Ruler();
  this.options = {};
  this.configure(config[preset]);
  this.set(options || {});
}
Remarkable.prototype.set = function(options) {
  assign(this.options, options);
};
Remarkable.prototype.configure = function(presets) {
  var self = this;
  if (!presets) {
    throw new Error('Wrong `remarkable` preset, check name/content');
  }
  if (presets.options) {
    self.set(presets.options);
  }
  if (presets.components) {
    Object.keys(presets.components).forEach(function(name) {
      if (presets.components[name].rules) {
        self[name].ruler.enable(presets.components[name].rules, true);
      }
    });
  }
};
Remarkable.prototype.use = function(plugin, options) {
  plugin(this, options);
  return this;
};
Remarkable.prototype.parse = function(str, env) {
  var state = new StateCore(this, str, env);
  this.core.process(state);
  return state.tokens;
};
Remarkable.prototype.render = function(str, env) {
  env = env || {};
  return this.renderer.render(this.parse(str, env), this.options, env);
};
Remarkable.prototype.parseInline = function(str, env) {
  var state = new StateCore(this, str, env);
  state.inlineMode = true;
  this.core.process(state);
  return state.tokens;
};
Remarkable.prototype.renderInline = function(str, env) {
  env = env || {};
  return this.renderer.render(this.parseInline(str, env), this.options, env);
};
module.exports = Remarkable;
module.exports.utils = require("./common\utils");
