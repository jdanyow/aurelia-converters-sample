System.register(['aurelia-framework', 'commonmark', '../util'], function (_export) {
  var bindable, inject, noView, skipContentProcessing, commonmark, isExternalLink, titleToSlug, _classCallCheck, _createDecoratedClass, reader, writer, Markdown;

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
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();

      Markdown = (function () {
        var _instanceInitializers = {};

        function Markdown(element) {
          _classCallCheck(this, _Markdown);

          this.value = _instanceInitializers.value.call(this);

          this.element = element;
          element.className += ' markdown-body';
          this.setContent(element.innerHTML || '');
        }

        var _Markdown = Markdown;

        _createDecoratedClass(_Markdown, [{
          key: 'value',
          decorators: [bindable],
          initializer: function () {},
          enumerable: true
        }, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9tYXJrZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3dJQUlJLE1BQU0sRUFDTixNQUFNLEVBd0ZHLFFBQVE7O0FBdEZyQixXQUFTLE9BQU8sQ0FBQyxRQUFRLEVBQUU7QUFDekIsV0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztHQUM5Qzs7QUFFRCxXQUFTLFNBQVMsQ0FBQyxRQUFRLEVBQUU7QUFxQjNCLFFBQUksTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsUUFBSSxNQUFNLEVBQUU7QUFDVixjQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDL0Y7QUFDRCxXQUFPLFFBQVEsQ0FBQztHQUNqQjs7QUFFRCxXQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUU7QUFDaEMsV0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxVQUFDLEtBQUssRUFBRSxFQUFFO2FBQUssRUFBRSxHQUFHLEdBQUc7S0FBQSxDQUFDLENBQUM7R0FDbkU7O0FBRUQsV0FBUyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7QUFFcEMsUUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztRQUMzQyxDQUFDO1FBQUUsRUFBRSxDQUFDO0FBQ1YsU0FBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0MsVUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ2xDLFNBQVM7QUFDWCxhQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztLQUM5QjtHQUNGOztBQUVELFdBQVMsb0JBQW9CLENBQUMsT0FBTyxFQUFFO0FBQ3JDLFFBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUN4RCxDQUFDO1FBQUUsRUFBRTtRQUFFLENBQUM7UUFBRSxLQUFLO1FBQUUsSUFBSSxDQUFDO0FBQzFCLFNBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVDLE9BQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsV0FBSyxHQUFHLENBQUMsQ0FBQyxXQUFXLENBQUM7QUFDdEIsVUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixPQUFDLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztBQUNaLE9BQUMsQ0FBQyxTQUFTLGVBQWEsSUFBSSxnQ0FBMkIsSUFBSSwrRUFBMEUsS0FBSyxBQUFFLENBQUM7S0FDOUk7R0FDRjs7QUFFRCxXQUFTLHVCQUF1QixDQUFDLE9BQU8sRUFBRTtBQUN4QyxRQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDO1FBQzVDLENBQUM7UUFBRSxFQUFFLENBQUM7QUFDVixTQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUV6QyxVQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxLQUFLLEtBQUssRUFDdkMsU0FBUzs7QUFHWCxXQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7O0FBR25ELFVBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFDdkMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxzQkFBc0IsQ0FBQzs7QUFPL0MsV0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ2xDO0dBQ0Y7Ozs7bUNBeEZPLFFBQVE7aUNBQUUsTUFBTTtpQ0FBRSxNQUFNO2dEQUFFLHFCQUFxQjs7Ozs2QkFFL0MsY0FBYzswQkFBRSxXQUFXOzs7Ozs7Ozs7QUFFL0IsWUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUNoQyxZQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsWUFBWSxFQUFFOztBQXdGN0IsY0FBUTs7O0FBR1IsaUJBSEEsUUFBUSxDQUdQLE9BQU8sRUFBRTs7O2VBRlgsS0FBSyx5QkFBTCxLQUFLOztBQUdiLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGlCQUFPLENBQUMsU0FBUyxJQUFJLGdCQUFnQixDQUFDO0FBQ3RDLGNBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMxQzs7d0JBUFUsUUFBUTs7Ozt1QkFDbEIsUUFBUTs7Ozs7aUJBUUcsc0JBQUMsUUFBUSxFQUFFO0FBQ3JCLGdCQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQzNCOzs7aUJBRVMsb0JBQUMsUUFBUSxFQUFFO0FBQ25CLG9CQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLG9CQUFRLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRTNDLCtCQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxnQ0FBb0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkMsbUNBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1dBQ3ZDOzs7QUFyQlUsZ0JBQVEsR0FEcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FGcEIsTUFBTSxDQUVNLFFBQVEsS0FBUixRQUFRO0FBQVIsZ0JBQVEsR0FIcEIscUJBQXFCLENBR1QsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFROzs7MEJBQVIsUUFBUSIsImZpbGUiOiJyZXNvdXJjZXMvbWFya2Rvd24uanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9