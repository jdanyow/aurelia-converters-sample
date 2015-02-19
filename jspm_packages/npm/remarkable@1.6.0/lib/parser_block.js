/* */ 
'use strict';
var Ruler = require("./ruler");
var StateBlock = require("./rules_block\state_block");
var _rules = [['code', require("./rules_block\code")], ['fences', require("./rules_block\fences"), ['paragraph', 'blockquote', 'list']], ['blockquote', require("./rules_block\blockquote"), ['paragraph', 'blockquote', 'list']], ['hr', require("./rules_block\hr"), ['paragraph', 'blockquote', 'list']], ['list', require("./rules_block\list"), ['paragraph', 'blockquote']], ['footnote', require("./rules_block\footnote"), ['paragraph']], ['heading', require("./rules_block\heading"), ['paragraph', 'blockquote']], ['lheading', require("./rules_block\lheading")], ['htmlblock', require("./rules_block\htmlblock"), ['paragraph', 'blockquote']], ['table', require("./rules_block\table"), ['paragraph']], ['deflist', require("./rules_block\deflist"), ['paragraph']], ['paragraph', require("./rules_block\paragraph")]];
function ParserBlock() {
  this.ruler = new Ruler();
  for (var i = 0; i < _rules.length; i++) {
    this.ruler.push(_rules[i][0], _rules[i][1], {alt: (_rules[i][2] || []).slice()});
  }
}
ParserBlock.prototype.tokenize = function(state, startLine, endLine) {
  var rules = this.ruler.getRules('');
  var len = rules.length;
  var line = startLine;
  var hasEmptyLines = false;
  var ok,
      i;
  while (line < endLine) {
    state.line = line = state.skipEmptyLines(line);
    if (line >= endLine) {
      break;
    }
    if (state.tShift[line] < state.blkIndent) {
      break;
    }
    for (i = 0; i < len; i++) {
      ok = rules[i](state, line, endLine, false);
      if (ok) {
        break;
      }
    }
    state.tight = !hasEmptyLines;
    if (state.isEmpty(state.line - 1)) {
      hasEmptyLines = true;
    }
    line = state.line;
    if (line < endLine && state.isEmpty(line)) {
      hasEmptyLines = true;
      line++;
      if (line < endLine && state.parentType === 'list' && state.isEmpty(line)) {
        break;
      }
      state.line = line;
    }
  }
};
var TABS_SCAN_RE = /[\n\t]/g;
var NEWLINES_RE = /\r[\n\u0085]|[\u2424\u2028\u0085]/g;
var SPACES_RE = /\u00a0/g;
ParserBlock.prototype.parse = function(str, options, env, outTokens) {
  var state,
      lineStart = 0,
      lastTabPos = 0;
  if (!str) {
    return [];
  }
  str = str.replace(SPACES_RE, ' ');
  str = str.replace(NEWLINES_RE, '\n');
  if (str.indexOf('\t') >= 0) {
    str = str.replace(TABS_SCAN_RE, function(match, offset) {
      var result;
      if (str.charCodeAt(offset) === 0x0A) {
        lineStart = offset + 1;
        lastTabPos = 0;
        return match;
      }
      result = '    '.slice((offset - lineStart - lastTabPos) % 4);
      lastTabPos = offset - lineStart + 1;
      return result;
    });
  }
  state = new StateBlock(str, this, options, env, outTokens);
  this.tokenize(state, state.line, state.lineMax);
};
module.exports = ParserBlock;
