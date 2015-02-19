import {Behavior} from 'aurelia-framework';
import commonmark from 'commonmark';
import {isExternalLink, titleToSlug} from '../util';

var reader = new commonmark.Parser(),
    writer = new commonmark.HtmlRenderer();

function getHtml(markdown) {
  return writer.render(reader.parse(markdown));
}

function fixIndent(markdown) {
  /* This is intended to remove indentation that isnot really part of
   * the markdown, to preserve the ability to indent the markup properly.
   *
   * In the example below the spaces marked with dashes will be removed.
   *
   * <template>
   *   <markdown>
   * ----# hello world
   * ----
   * ----lorem ipsum bla bla
   * ----
   * ----    var x = 3;
   * ----
   *   </markdown>
   * </template>
   */
  var result = /^( +)\S/im.exec(markdown);
  if (result) {
    markdown = markdown.replace(new RegExp('^ {' + result[1].length.toString() + '}', 'gim'), '');
  }
  return markdown;
}

function updateAnchorTargets(element) {
  // external links need target="_blank"
  var anchors = element.getElementsByTagName('a'),
      i, ii;
  for(i = 0, ii = anchors.length; i < ii; i++) {
    if (!isExternalLink(anchors[i].href))
      continue;
    anchors[i].target = '_blank';
  }
}

function makeHeadingsLinkable(element) {
  var headings = element.querySelectorAll('h1,h2,h3'),
      i, ii, h, title, slug;
  for(i = 0, ii = headings.length; i < ii; i++) {
    h = headings[i];
    title = h.textContent;
    slug = titleToSlug(title);
    h.id = slug;
    h.innerHTML = `<a id="${slug}" class="anchor" href="#${slug}" aria-hidden="true"><span class="glyphicon glyphicon-link"></span></a>${title}`;
  }
}

function applySyntaxHighlighting(element) {
  var codes = element.getElementsByTagName('code'),
      i, ii;
  for(i = 0, ii = codes.length; i < ii; i++) {
    // don't mess with code elements that are not enclosed in a pre.
    if (codes[i].parentNode.tagName !== 'PRE')
      continue;

    // trim the code to avoid strange appearance with line numbers.
    codes[i].textContent = codes[i].textContent.trim();

    // make sure there's a language-* class.
    if (!/language-/.test(codes[i].className))
      codes[i].className += ' language-javascript';

    // make sure the parent pre has the line-numbers class.
    if (!/line-numbers/.test(codes[i].parentNode.className))
      codes[i].parentNode.className += ' line-numbers';

    // apply syntax highlighting.
    Prism.highlightElement(codes[i]);
  }
}

export class Markdown {
  static metadata(){
    return Behavior
      .customElement('markdown')
      .noView()
      .skipContentProcessing();
  }

  static inject() { return [Element]; }
  constructor(element) {
    var markdown = fixIndent(element.innerHTML || '');
    element.className += ' markdown-body';
    element.innerHTML = getHtml(markdown);

    // todo: find out if this is causing a bunch of repaints and refactor
    // to use document fragment or something.
    updateAnchorTargets(element);
    makeHeadingsLinkable(element);
    applySyntaxHighlighting(element);
  }
}
