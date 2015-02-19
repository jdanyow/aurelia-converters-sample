/* */ 
(function(process) {
  'use strict';
  var block_names = require("..\common\html_blocks.js");
  var HTML_TAG_OPEN_RE = /^<([a-zA-Z]{1,15})[\s\/>]/;
  var HTML_TAG_CLOSE_RE = /^<\/([a-zA-Z]{1,15})[\s>]/;
  function isLetter(ch) {
    var lc = ch | 0x20;
    return (lc >= 0x61) && (lc <= 0x7a);
  }
  module.exports = function htmlblock(state, startLine, endLine, silent) {
    var ch,
        match,
        nextLine,
        pos = state.bMarks[startLine],
        max = state.eMarks[startLine],
        shift = state.tShift[startLine];
    pos += shift;
    if (!state.options.html) {
      return false;
    }
    if (shift > 3 || pos + 2 >= max) {
      return false;
    }
    if (state.src.charCodeAt(pos) !== 0x3C) {
      return false;
    }
    ch = state.src.charCodeAt(pos + 1);
    if (ch === 0x21 || ch === 0x3F) {
      if (silent) {
        return true;
      }
    } else if (ch === 0x2F || isLetter(ch)) {
      if (ch === 0x2F) {
        match = state.src.slice(pos, max).match(HTML_TAG_CLOSE_RE);
        if (!match) {
          return false;
        }
      } else {
        match = state.src.slice(pos, max).match(HTML_TAG_OPEN_RE);
        if (!match) {
          return false;
        }
      }
      if (block_names[match[1].toLowerCase()] !== true) {
        return false;
      }
      if (silent) {
        return true;
      }
    } else {
      return false;
    }
    nextLine = startLine + 1;
    while (nextLine < state.lineMax && !state.isEmpty(nextLine)) {
      nextLine++;
    }
    state.line = nextLine;
    state.tokens.push({
      type: 'htmlblock',
      level: state.level,
      lines: [startLine, state.line],
      content: state.getLines(startLine, nextLine, 0, true)
    });
    return true;
  };
})(require("process"));
