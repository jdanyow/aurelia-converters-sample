/* */ 
'use strict';
var normalizeLink = require("./normalize_link");
var unescapeMd = require("..\common\utils.js").unescapeMd;
module.exports = function parseLinkDestination(state, pos) {
  var code,
      level,
      link,
      start = pos,
      max = state.posMax;
  if (state.src.charCodeAt(pos) === 0x3C) {
    pos++;
    while (pos < max) {
      code = state.src.charCodeAt(pos);
      if (code === 0x0A) {
        return false;
      }
      if (code === 0x3E) {
        link = normalizeLink(unescapeMd(state.src.slice(start + 1, pos)));
        if (!state.parser.validateLink(link)) {
          return false;
        }
        state.pos = pos + 1;
        state.linkContent = link;
        return true;
      }
      if (code === 0x5C && pos + 1 < max) {
        pos += 2;
        continue;
      }
      pos++;
    }
    return false;
  }
  level = 0;
  while (pos < max) {
    code = state.src.charCodeAt(pos);
    if (code === 0x20) {
      break;
    }
    if (code < 0x20 || code === 0x7F) {
      break;
    }
    if (code === 0x5C && pos + 1 < max) {
      pos += 2;
      continue;
    }
    if (code === 0x28) {
      level++;
      if (level > 1) {
        break;
      }
    }
    if (code === 0x29) {
      level--;
      if (level < 0) {
        break;
      }
    }
    pos++;
  }
  if (start === pos) {
    return false;
  }
  link = normalizeLink(unescapeMd(state.src.slice(start, pos)));
  if (!state.parser.validateLink(link)) {
    return false;
  }
  state.linkContent = link;
  state.pos = pos;
  return true;
};
