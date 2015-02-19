/* */ 
(function(process) {
  Autolinker.HtmlParser = Autolinker.Util.extend(Object, {
    htmlRegex: (function() {
      var tagNameRegex = /[0-9a-zA-Z][0-9a-zA-Z:]*/,
          attrNameRegex = /[^\s\0"'>\/=\x01-\x1F\x7F]+/,
          attrValueRegex = /(?:"[^"]*?"|'[^']*?'|[^'"=<>`\s]+)/,
          nameEqualsValueRegex = attrNameRegex.source + '(?:\\s*=\\s*' + attrValueRegex.source + ')?';
      return new RegExp(['(?:', '<(!DOCTYPE)', '(?:', '\\s+', '(?:', nameEqualsValueRegex, '|', attrValueRegex.source + ')', ')*', '>', ')', '|', '(?:', '<(/)?', '(' + tagNameRegex.source + ')', '(?:', '\\s+', nameEqualsValueRegex, ')*', '\\s*/?', '>', ')'].join(""), 'gi');
    })(),
    parse: function(html, options) {
      options = options || {};
      var processHtmlNodeVisitor = options.processHtmlNode || function() {},
          processTextNodeVisitor = options.processTextNode || function() {},
          htmlRegex = this.htmlRegex,
          currentResult,
          lastIndex = 0;
      while ((currentResult = htmlRegex.exec(html)) !== null) {
        var tagText = currentResult[0],
            tagName = currentResult[1] || currentResult[3],
            isClosingTag = !!currentResult[2],
            inBetweenTagsText = html.substring(lastIndex, currentResult.index);
        if (inBetweenTagsText) {
          processTextNodeVisitor(inBetweenTagsText);
        }
        processHtmlNodeVisitor(tagText, tagName.toLowerCase(), isClosingTag);
        lastIndex = currentResult.index + tagText.length;
      }
      if (lastIndex < html.length) {
        var text = html.substring(lastIndex);
        if (text) {
          processTextNodeVisitor(text);
        }
      }
    }
  });
})(require("process"));
