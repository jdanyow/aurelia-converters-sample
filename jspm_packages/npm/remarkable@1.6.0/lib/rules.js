/* */ 
'use strict';
var has = require("./common\utils").has;
var unescapeMd = require("./common\utils").unescapeMd;
var replaceEntities = require("./common\utils").replaceEntities;
var escapeHtml = require("./common\utils").escapeHtml;
var rules = {};
rules.blockquote_open = function() {
  return '<blockquote>\n';
};
rules.blockquote_close = function(tokens, idx) {
  return '</blockquote>' + getBreak(tokens, idx);
};
rules.code = function(tokens, idx) {
  if (tokens[idx].block) {
    return '<pre><code>' + escapeHtml(tokens[idx].content) + '</code></pre>' + getBreak(tokens, idx);
  }
  return '<code>' + escapeHtml(tokens[idx].content) + '</code>';
};
rules.fence = function(tokens, idx, options, env, self) {
  var token = tokens[idx];
  var langClass = '';
  var langPrefix = options.langPrefix;
  var langName = '',
      fenceName;
  var highlighted;
  if (token.params) {
    fenceName = token.params.split(/\s+/g)[0];
    if (has(self.rules.fence_custom, fenceName)) {
      return self.rules.fence_custom[fenceName](tokens, idx, options, env, self);
    }
    langName = escapeHtml(replaceEntities(unescapeMd(fenceName)));
    langClass = ' class="' + langPrefix + langName + '"';
  }
  if (options.highlight) {
    highlighted = options.highlight(token.content, langName) || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }
  return '<pre><code' + langClass + '>' + highlighted + '</code></pre>' + getBreak(tokens, idx);
};
rules.fence_custom = {};
rules.heading_open = function(tokens, idx) {
  return '<h' + tokens[idx].hLevel + '>';
};
rules.heading_close = function(tokens, idx) {
  return '</h' + tokens[idx].hLevel + '>\n';
};
rules.hr = function(tokens, idx, options) {
  return (options.xhtmlOut ? '<hr />' : '<hr>') + getBreak(tokens, idx);
};
rules.bullet_list_open = function() {
  return '<ul>\n';
};
rules.bullet_list_close = function(tokens, idx) {
  return '</ul>' + getBreak(tokens, idx);
};
rules.list_item_open = function() {
  return '<li>';
};
rules.list_item_close = function() {
  return '</li>\n';
};
rules.ordered_list_open = function(tokens, idx) {
  var token = tokens[idx];
  var order = token.order > 1 ? ' start="' + token.order + '"' : '';
  return '<ol' + order + '>\n';
};
rules.ordered_list_close = function(tokens, idx) {
  return '</ol>' + getBreak(tokens, idx);
};
rules.paragraph_open = function(tokens, idx) {
  return tokens[idx].tight ? '' : '<p>';
};
rules.paragraph_close = function(tokens, idx) {
  var addBreak = !(tokens[idx].tight && idx && tokens[idx - 1].type === 'inline' && !tokens[idx - 1].content);
  return (tokens[idx].tight ? '' : '</p>') + (addBreak ? getBreak(tokens, idx) : '');
};
rules.link_open = function(tokens, idx) {
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  return '<a href="' + escapeHtml(tokens[idx].href) + '"' + title + '>';
};
rules.link_close = function() {
  return '</a>';
};
rules.image = function(tokens, idx, options) {
  var src = ' src="' + escapeHtml(tokens[idx].src) + '"';
  var title = tokens[idx].title ? (' title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '"') : '';
  var alt = ' alt="' + (tokens[idx].alt ? escapeHtml(replaceEntities(tokens[idx].alt)) : '') + '"';
  var suffix = options.xhtmlOut ? ' /' : '';
  return '<img' + src + alt + title + suffix + '>';
};
rules.table_open = function() {
  return '<table>\n';
};
rules.table_close = function() {
  return '</table>\n';
};
rules.thead_open = function() {
  return '<thead>\n';
};
rules.thead_close = function() {
  return '</thead>\n';
};
rules.tbody_open = function() {
  return '<tbody>\n';
};
rules.tbody_close = function() {
  return '</tbody>\n';
};
rules.tr_open = function() {
  return '<tr>';
};
rules.tr_close = function() {
  return '</tr>\n';
};
rules.th_open = function(tokens, idx) {
  var token = tokens[idx];
  return '<th' + (token.align ? ' style="text-align:' + token.align + '"' : '') + '>';
};
rules.th_close = function() {
  return '</th>';
};
rules.td_open = function(tokens, idx) {
  var token = tokens[idx];
  return '<td' + (token.align ? ' style="text-align:' + token.align + '"' : '') + '>';
};
rules.td_close = function() {
  return '</td>';
};
rules.strong_open = function() {
  return '<strong>';
};
rules.strong_close = function() {
  return '</strong>';
};
rules.em_open = function() {
  return '<em>';
};
rules.em_close = function() {
  return '</em>';
};
rules.del_open = function() {
  return '<del>';
};
rules.del_close = function() {
  return '</del>';
};
rules.ins_open = function() {
  return '<ins>';
};
rules.ins_close = function() {
  return '</ins>';
};
rules.mark_open = function() {
  return '<mark>';
};
rules.mark_close = function() {
  return '</mark>';
};
rules.sub = function(tokens, idx) {
  return '<sub>' + escapeHtml(tokens[idx].content) + '</sub>';
};
rules.sup = function(tokens, idx) {
  return '<sup>' + escapeHtml(tokens[idx].content) + '</sup>';
};
rules.hardbreak = function(tokens, idx, options) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
rules.softbreak = function(tokens, idx, options) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};
rules.text = function(tokens, idx) {
  return escapeHtml(tokens[idx].content);
};
rules.htmlblock = function(tokens, idx) {
  return tokens[idx].content;
};
rules.htmltag = function(tokens, idx) {
  return tokens[idx].content;
};
rules.abbr_open = function(tokens, idx) {
  return '<abbr title="' + escapeHtml(replaceEntities(tokens[idx].title)) + '">';
};
rules.abbr_close = function() {
  return '</abbr>';
};
rules.footnote_ref = function(tokens, idx) {
  var n = Number(tokens[idx].id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return '<sup class="footnote-ref"><a href="#fn' + n + '" id="' + id + '">[' + n + ']</a></sup>';
};
rules.footnote_block_open = function(tokens, idx, options) {
  var hr = options.xhtmlOut ? '<hr class="footnotes-sep" />\n' : '<hr class="footnotes-sep">\n';
  return hr + '<section class="footnotes">\n<ol class="footnotes-list">\n';
};
rules.footnote_block_close = function() {
  return '</ol>\n</section>\n';
};
rules.footnote_open = function(tokens, idx) {
  var id = Number(tokens[idx].id + 1).toString();
  return '<li id="fn' + id + '"  class="footnote-item">';
};
rules.footnote_close = function() {
  return '</li>\n';
};
rules.footnote_anchor = function(tokens, idx) {
  var n = Number(tokens[idx].id + 1).toString();
  var id = 'fnref' + n;
  if (tokens[idx].subId > 0) {
    id += ':' + tokens[idx].subId;
  }
  return ' <a href="#' + id + '" class="footnote-backref">↩</a>';
};
rules.dl_open = function() {
  return '<dl>\n';
};
rules.dt_open = function() {
  return '<dt>';
};
rules.dd_open = function() {
  return '<dd>';
};
rules.dl_close = function() {
  return '</dl>\n';
};
rules.dt_close = function() {
  return '</dt>\n';
};
rules.dd_close = function() {
  return '</dd>\n';
};
function nextToken(tokens, idx) {
  if (++idx >= tokens.length - 2) {
    return idx;
  }
  if ((tokens[idx].type === 'paragraph_open' && tokens[idx].tight) && (tokens[idx + 1].type === 'inline' && tokens[idx + 1].content.length === 0) && (tokens[idx + 2].type === 'paragraph_close' && tokens[idx + 2].tight)) {
    return nextToken(tokens, idx + 2);
  }
  return idx;
}
var getBreak = rules.getBreak = function getBreak(tokens, idx) {
  idx = nextToken(tokens, idx);
  if (idx < tokens.length && tokens[idx].type === 'list_item_close') {
    return '';
  }
  return '\n';
};
module.exports = rules;
