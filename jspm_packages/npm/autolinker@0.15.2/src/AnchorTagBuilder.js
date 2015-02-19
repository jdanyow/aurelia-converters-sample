/* */ 
(function(process) {
  Autolinker.AnchorTagBuilder = Autolinker.Util.extend(Object, {
    constructor: function(cfg) {
      Autolinker.Util.assign(this, cfg);
    },
    build: function(match) {
      var tag = new Autolinker.HtmlTag({
        tagName: 'a',
        attrs: this.createAttrs(match.getType(), match.getAnchorHref()),
        innerHtml: this.processAnchorText(match.getAnchorText())
      });
      return tag;
    },
    createAttrs: function(matchType, anchorHref) {
      var attrs = {'href': anchorHref};
      var cssClass = this.createCssClass(matchType);
      if (cssClass) {
        attrs['class'] = cssClass;
      }
      if (this.newWindow) {
        attrs['target'] = "_blank";
      }
      return attrs;
    },
    createCssClass: function(matchType) {
      var className = this.className;
      if (!className)
        return "";
      else
        return className + " " + className + "-" + matchType;
    },
    processAnchorText: function(anchorText) {
      anchorText = this.doTruncate(anchorText);
      return anchorText;
    },
    doTruncate: function(anchorText) {
      return Autolinker.Util.ellipsis(anchorText, this.truncate || Number.POSITIVE_INFINITY);
    }
  });
})(require("process"));
