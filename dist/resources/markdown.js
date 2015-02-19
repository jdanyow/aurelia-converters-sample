System.register(["aurelia-framework", "commonmark", "../util"], function (_export) {
  "use strict";

  var Behavior, commonmark, isExternalLink, titleToSlug, _prototypeProperties, _classCallCheck, reader, writer, Markdown;


  function getHtml(markdown) {
    return writer.render(reader.parse(markdown));
  }

  function fixIndent(markdown) {
    var result = /^( +)\S/im.exec(markdown);
    if (result) {
      markdown = markdown.replace(new RegExp("^ {" + result[1].length.toString() + "}", "gim"), "");
    }
    return markdown;
  }

  function updateAnchorTargets(element) {
    var anchors = element.getElementsByTagName("a"),
        i,
        ii;
    for (i = 0, ii = anchors.length; i < ii; i++) {
      if (!isExternalLink(anchors[i].href)) continue;
      anchors[i].target = "_blank";
    }
  }

  function makeHeadingsLinkable(element) {
    var headings = element.querySelectorAll("h1,h2,h3,h4,h5,h6"),
        i,
        ii,
        h,
        title,
        slug;
    for (i = 0, ii = headings.length; i < ii; i++) {
      h = headings[i];
      title = h.textContent;
      slug = titleToSlug(title);
      h.id = slug;
      h.innerHTML = "<a id=\"" + slug + "\" class=\"anchor\" href=\"#" + slug + "\" aria-hidden=\"true\"><span class=\"glyphicon glyphicon-link\"></span></a>" + title;
    }
  }

  function applySyntaxHighlighting(element) {
    var codes = element.getElementsByTagName("code"),
        i,
        ii;
    for (i = 0, ii = codes.length; i < ii; i++) {
      if (codes[i].parentNode.tagName !== "PRE") continue;

      codes[i].textContent = codes[i].textContent.trim();

      if (!/language-/.test(codes[i].className)) codes[i].className += " language-javascript";

      if (!/line-numbers/.test(codes[i].parentNode.className)) codes[i].parentNode.className += " line-numbers";

      Prism.highlightElement(codes[i]);
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_commonmark) {
      commonmark = _commonmark["default"];
    }, function (_util) {
      isExternalLink = _util.isExternalLink;
      titleToSlug = _util.titleToSlug;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();
      Markdown = _export("Markdown", (function () {
        function Markdown(element) {
          _classCallCheck(this, Markdown);

          var markdown = fixIndent(element.innerHTML || "");
          element.className += " markdown-body";
          element.innerHTML = getHtml(markdown);

          updateAnchorTargets(element);
          makeHeadingsLinkable(element);
          applySyntaxHighlighting(element);
        }

        _prototypeProperties(Markdown, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("markdown").noView().skipContentProcessing();
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        });

        return Markdown;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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