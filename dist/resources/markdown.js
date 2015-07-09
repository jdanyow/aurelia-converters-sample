System.register(['aurelia-framework', 'commonmark', '../util'], function (_export) {
  'use strict';

  var bindable, inject, noView, skipContentProcessing, commonmark, isExternalLink, titleToSlug, reader, writer, Markdown;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer.call(target); Object.defineProperty(target, key, descriptor); }

  function getHtml(markdown) {
    return writer.render(reader.parse(markdown));
  }

  function fixIndent(markdown) {
    var result = /^( +)\S/im.exec(markdown);
    if (result) {
      markdown = markdown.replace(new RegExp('^ {' + result[1].length.toString() + '}', 'gim'), '');
    }
    return markdown;
  }

  function fixBlockQuotes(markdown) {
    return markdown.replace(/^(\s*)&gt;/gim, function (match, p1) {
      return p1 + '>';
    });
  }

  function updateAnchorTargets(element) {
    var anchors = element.getElementsByTagName('a'),
        i,
        ii;
    for (i = 0, ii = anchors.length; i < ii; i++) {
      if (!isExternalLink(anchors[i].href)) continue;
      anchors[i].target = '_blank';
    }
  }

  function makeHeadingsLinkable(element) {
    var headings = element.querySelectorAll('h1,h2,h3,h4,h5,h6'),
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
      h.innerHTML = '<a id="' + slug + '" class="anchor" href="#' + slug + '" aria-hidden="true"><span class="glyphicon glyphicon-link"></span></a>' + title;
    }
  }

  function applySyntaxHighlighting(element) {
    var codes = element.getElementsByTagName('code'),
        i,
        ii;
    for (i = 0, ii = codes.length; i < ii; i++) {
      if (codes[i].parentNode.tagName !== 'PRE') continue;

      codes[i].textContent = codes[i].textContent.trim();

      if (!/language-/.test(codes[i].className)) codes[i].className += ' language-javascript';

      Prism.highlightElement(codes[i]);
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      noView = _aureliaFramework.noView;
      skipContentProcessing = _aureliaFramework.skipContentProcessing;
    }, function (_commonmark) {
      commonmark = _commonmark['default'];
    }, function (_util) {
      isExternalLink = _util.isExternalLink;
      titleToSlug = _util.titleToSlug;
    }],
    execute: function () {
      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();

      Markdown = (function () {
        var _instanceInitializers = {};

        function Markdown(element) {
          _classCallCheck(this, _Markdown);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          this.element = element;
          element.className += ' markdown-body';
          this.setContent(element.innerHTML || '');
        }

        var _Markdown = Markdown;

        _createDecoratedClass(_Markdown, [{
          key: 'valueChanged',
          value: function valueChanged(newValue) {
            this.setContent(newValue);
          }
        }, {
          key: 'setContent',
          value: function setContent(markdown) {
            markdown = fixIndent(markdown);
            markdown = fixBlockQuotes(markdown);
            this.element.innerHTML = getHtml(markdown);

            updateAnchorTargets(this.element);
            makeHeadingsLinkable(this.element);
            applySyntaxHighlighting(this.element);
          }
        }, {
          key: 'value',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        Markdown = inject(Element)(Markdown) || Markdown;
        Markdown = noView(Markdown) || Markdown;
        Markdown = skipContentProcessing(Markdown) || Markdown;
        return Markdown;
      })();

      _export('Markdown', Markdown);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxDQUFDO0FBQ25DLG1DQUF1QixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUN2Qzs7O3VCQXJCQSxRQUFROzs7OztBQURFLGdCQUFRLEdBRHBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBRnBCLE1BQU0sQ0FFTSxRQUFRLEtBQVIsUUFBUTtBQUFSLGdCQUFRLEdBSHBCLHFCQUFxQixDQUdULFFBQVEsS0FBUixRQUFRO2VBQVIsUUFBUTs7OzBCQUFSLFFBQVEiLCJmaWxlIjoicmVzb3VyY2VzL21hcmtkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0LCBub1ZpZXcsIHNraXBDb250ZW50UHJvY2Vzc2luZ30gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgY29tbW9ubWFyayBmcm9tICdjb21tb25tYXJrJztcclxuaW1wb3J0IHtpc0V4dGVybmFsTGluaywgdGl0bGVUb1NsdWd9IGZyb20gJy4uL3V0aWwnO1xyXG5cclxudmFyIHJlYWRlciA9IG5ldyBjb21tb25tYXJrLlBhcnNlcigpLFxyXG4gICAgd3JpdGVyID0gbmV3IGNvbW1vbm1hcmsuSHRtbFJlbmRlcmVyKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRIdG1sKG1hcmtkb3duKSB7XHJcbiAgcmV0dXJuIHdyaXRlci5yZW5kZXIocmVhZGVyLnBhcnNlKG1hcmtkb3duKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpeEluZGVudChtYXJrZG93bikge1xyXG4gIC8qXHJcbiAgVGhpcyBpcyBpbnRlbmRlZCB0byByZW1vdmUgaW5kZW50YXRpb24gdGhhdCBpcyBub3QgcmVhbGx5IHBhcnQgb2ZcclxuICB0aGUgbWFya2Rvd24sIHRvIHByZXNlcnZlIHRoZSBhYmlsaXR5IHRvIGluZGVudCB0aGUgbWFya3VwIHByb3Blcmx5LlxyXG5cclxuICBJbiB0aGUgZXhhbXBsZSBiZWxvdyB0aGUgdG90YWwgaW5kZW50YXRpb24gd2lsbCBiZSByZWR1Y2VkIGJ5IDQgY2hhcmFjdGVycy5cclxuXHJcbiAgfFxyXG4gIHw8dGVtcGxhdGU+XHJcbiAgfCAgPG1hcmtkb3duPlxyXG4gIHwgICAgIyBoZWxsbyB3b3JsZFxyXG4gIHxcclxuICB8ICAgIGxvcmVtIGlwc3VtIGJsYSBibGFcclxuICB8XHJcbiAgfCAgICAgICAgdmFyIHggPSAzO1xyXG4gIHxcclxuICB8ICA8L21hcmtkb3duPlxyXG4gIHw8L3RlbXBsYXRlPlxyXG4gIHxcclxuXHJcbiAgKi9cclxuICB2YXIgcmVzdWx0ID0gL14oICspXFxTL2ltLmV4ZWMobWFya2Rvd24pO1xyXG4gIGlmIChyZXN1bHQpIHtcclxuICAgIG1hcmtkb3duID0gbWFya2Rvd24ucmVwbGFjZShuZXcgUmVnRXhwKCdeIHsnICsgcmVzdWx0WzFdLmxlbmd0aC50b1N0cmluZygpICsgJ30nLCAnZ2ltJyksICcnKTtcclxuICB9XHJcbiAgcmV0dXJuIG1hcmtkb3duO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaXhCbG9ja1F1b3RlcyhtYXJrZG93bikge1xyXG4gIHJldHVybiBtYXJrZG93bi5yZXBsYWNlKC9eKFxccyopJmd0Oy9naW0sIChtYXRjaCwgcDEpID0+IHAxICsgJz4nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQW5jaG9yVGFyZ2V0cyhlbGVtZW50KSB7XHJcbiAgLy8gZXh0ZXJuYWwgbGlua3MgbmVlZCB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gIHZhciBhbmNob3JzID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpLFxyXG4gICAgICBpLCBpaTtcclxuICBmb3IoaSA9IDAsIGlpID0gYW5jaG9ycy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XHJcbiAgICBpZiAoIWlzRXh0ZXJuYWxMaW5rKGFuY2hvcnNbaV0uaHJlZikpXHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgYW5jaG9yc1tpXS50YXJnZXQgPSAnX2JsYW5rJztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VIZWFkaW5nc0xpbmthYmxlKGVsZW1lbnQpIHtcclxuICB2YXIgaGVhZGluZ3MgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gxLGgyLGgzLGg0LGg1LGg2JyksXHJcbiAgICAgIGksIGlpLCBoLCB0aXRsZSwgc2x1ZztcclxuICBmb3IoaSA9IDAsIGlpID0gaGVhZGluZ3MubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xyXG4gICAgaCA9IGhlYWRpbmdzW2ldO1xyXG4gICAgdGl0bGUgPSBoLnRleHRDb250ZW50O1xyXG4gICAgc2x1ZyA9IHRpdGxlVG9TbHVnKHRpdGxlKTtcclxuICAgIGguaWQgPSBzbHVnO1xyXG4gICAgaC5pbm5lckhUTUwgPSBgPGEgaWQ9XCIke3NsdWd9XCIgY2xhc3M9XCJhbmNob3JcIiBocmVmPVwiIyR7c2x1Z31cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbGlua1wiPjwvc3Bhbj48L2E+JHt0aXRsZX1gO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlTeW50YXhIaWdobGlnaHRpbmcoZWxlbWVudCkge1xyXG4gIHZhciBjb2RlcyA9IGVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2NvZGUnKSxcclxuICAgICAgaSwgaWk7XHJcbiAgZm9yKGkgPSAwLCBpaSA9IGNvZGVzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcclxuICAgIC8vIGRvbid0IG1lc3Mgd2l0aCBjb2RlIGVsZW1lbnRzIHRoYXQgYXJlIG5vdCBlbmNsb3NlZCBpbiBhIHByZS5cclxuICAgIGlmIChjb2Rlc1tpXS5wYXJlbnROb2RlLnRhZ05hbWUgIT09ICdQUkUnKVxyXG4gICAgICBjb250aW51ZTtcclxuXHJcbiAgICAvLyB0cmltIHRoZSBjb2RlIHRvIGF2b2lkIHN0cmFuZ2UgYXBwZWFyYW5jZSB3aXRoIGxpbmUgbnVtYmVycy5cclxuICAgIGNvZGVzW2ldLnRleHRDb250ZW50ID0gY29kZXNbaV0udGV4dENvbnRlbnQudHJpbSgpO1xyXG5cclxuICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSdzIGEgbGFuZ3VhZ2UtKiBjbGFzcy5cclxuICAgIGlmICghL2xhbmd1YWdlLS8udGVzdChjb2Rlc1tpXS5jbGFzc05hbWUpKVxyXG4gICAgICBjb2Rlc1tpXS5jbGFzc05hbWUgKz0gJyBsYW5ndWFnZS1qYXZhc2NyaXB0JztcclxuXHJcbiAgICAvLyAvLyBtYWtlIHN1cmUgdGhlIHBhcmVudCBwcmUgaGFzIHRoZSBsaW5lLW51bWJlcnMgY2xhc3MuXHJcbiAgICAvLyBpZiAoIS9saW5lLW51bWJlcnMvLnRlc3QoY29kZXNbaV0ucGFyZW50Tm9kZS5jbGFzc05hbWUpKVxyXG4gICAgLy8gICBjb2Rlc1tpXS5wYXJlbnROb2RlLmNsYXNzTmFtZSArPSAnIGxpbmUtbnVtYmVycyc7XHJcblxyXG4gICAgLy8gYXBwbHkgc3ludGF4IGhpZ2hsaWdodGluZy5cclxuICAgIFByaXNtLmhpZ2hsaWdodEVsZW1lbnQoY29kZXNbaV0pO1xyXG4gIH1cclxufVxyXG5cclxuQHNraXBDb250ZW50UHJvY2Vzc2luZ1xyXG5Abm9WaWV3XHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIE1hcmtkb3duIHtcclxuICBAYmluZGFibGUgdmFsdWU7XHJcbiAgZWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9ICcgbWFya2Rvd24tYm9keSc7XHJcbiAgICB0aGlzLnNldENvbnRlbnQoZWxlbWVudC5pbm5lckhUTUwgfHwgJycpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2VkKG5ld1ZhbHVlKSB7XHJcbiAgICB0aGlzLnNldENvbnRlbnQobmV3VmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udGVudChtYXJrZG93bikge1xyXG4gICAgbWFya2Rvd24gPSBmaXhJbmRlbnQobWFya2Rvd24pO1xyXG4gICAgbWFya2Rvd24gPSBmaXhCbG9ja1F1b3RlcyhtYXJrZG93bik7XHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gZ2V0SHRtbChtYXJrZG93bik7XHJcblxyXG4gICAgdXBkYXRlQW5jaG9yVGFyZ2V0cyh0aGlzLmVsZW1lbnQpO1xyXG4gICAgbWFrZUhlYWRpbmdzTGlua2FibGUodGhpcy5lbGVtZW50KTtcclxuICAgIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==