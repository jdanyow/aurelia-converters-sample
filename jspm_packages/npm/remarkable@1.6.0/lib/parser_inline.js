/* */ 
'use strict';
var Ruler = require("./ruler");
var StateInline = require("./rules_inline\state_inline");
var utils = require("./common\utils");
var _rules = [['text', require("./rules_inline\text")], ['newline', require("./rules_inline\newline")], ['escape', require("./rules_inline\escape")], ['backticks', require("./rules_inline\backticks")], ['del', require("./rules_inline\del")], ['ins', require("./rules_inline\ins")], ['mark', require("./rules_inline\mark")], ['emphasis', require("./rules_inline\emphasis")], ['sub', require("./rules_inline\sub")], ['sup', require("./rules_inline\sup")], ['links', require("./rules_inline\links")], ['footnote_inline', require("./rules_inline\footnote_inline")], ['footnote_ref', require("./rules_inline\footnote_ref")], ['autolink', require("./rules_inline\autolink")], ['htmltag', require("./rules_inline\htmltag")], ['entity', require("./rules_inline\entity")]];
function ParserInline() {
  this.ruler = new Ruler();
  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1]);
  }
  this.validateLink = validateLink;
}
ParserInline.prototype.skipToken = function(state) {
  var rules = this.ruler.getRules('');
  var len = rules.length;
  var pos = state.pos;
  var i,
      cached_pos;
  if ((cached_pos = state.cacheGet(pos)) > 0) {
    state.pos = cached_pos;
    return;
  }
  for (i = 0; i < len; i++) {
    if (rules[i](state, true)) {
      state.cacheSet(pos, state.pos);
      return;
    }
  }
  state.pos++;
  state.cacheSet(pos, state.pos);
};
ParserInline.prototype.tokenize = function(state) {
  var rules = this.ruler.getRules('');
  var len = rules.length;
  var end = state.posMax;
  var ok,
      i;
  while (state.pos < end) {
    for (i = 0; i < len; i++) {
      ok = rules[i](state, false);
      if (ok) {
        break;
      }
    }
    if (ok) {
      if (state.pos >= end) {
        break;
      }
      continue;
    }
    state.pending += state.src[state.pos++];
  }
  if (state.pending) {
    state.pushPending();
  }
};
ParserInline.prototype.parse = function(str, options, env, outTokens) {
  var state = new StateInline(str, this, options, env, outTokens);
  this.tokenize(state);
};
function validateLink(url) {
  var BAD_PROTOCOLS = ['vbscript', 'javascript', 'file'];
  var str = url.trim().toLowerCase();
  str = utils.replaceEntities(str);
  if (str.indexOf(':') !== -1 && BAD_PROTOCOLS.indexOf(str.split(':')[0]) !== -1) {
    return false;
  }
  return true;
}
module.exports = ParserInline;
