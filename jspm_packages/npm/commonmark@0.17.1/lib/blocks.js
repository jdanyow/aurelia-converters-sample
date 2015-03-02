/* */ 
(function(process) {
  "use strict";
  var Node = require("./node");
  var unescapeString = require("./common").unescapeString;
  var CODE_INDENT = 4;
  var InlineParser = require("./inlines");
  var BLOCKTAGNAME = '(?:article|header|aside|hgroup|iframe|blockquote|hr|body|li|map|button|object|canvas|ol|caption|output|col|p|colgroup|pre|dd|progress|div|section|dl|table|td|dt|tbody|embed|textarea|fieldset|tfoot|figcaption|th|figure|thead|footer|footer|tr|form|ul|h1|h2|h3|h4|h5|h6|video|script|style)';
  var HTMLBLOCKOPEN = "<(?:" + BLOCKTAGNAME + "[\\s/>]" + "|" + "/" + BLOCKTAGNAME + "[\\s>]" + "|" + "[?!])";
  var reHtmlBlockOpen = new RegExp('^' + HTMLBLOCKOPEN, 'i');
  var reHrule = /^(?:(?:\* *){3,}|(?:_ *){3,}|(?:- *){3,}) *$/;
  var reMaybeSpecial = /^[#`~*+_=<>0-9-]/;
  var reNonSpace = /[^ \t\n]/;
  var reBulletListMarker = /^[*+-]( +|$)/;
  var reOrderedListMarker = /^(\d+)([.)])( +|$)/;
  var reATXHeaderMarker = /^#{1,6}(?: +|$)/;
  var reCodeFence = /^`{3,}(?!.*`)|^~{3,}(?!.*~)/;
  var reClosingCodeFence = /^(?:`{3,}|~{3,})(?= *$)/;
  var reSetextHeaderLine = /^(?:=+|-+) *$/;
  var reLineEnding = /\r\n|\n|\r/;
  var isBlank = function(s) {
    return !(reNonSpace.test(s));
  };
  var tabSpaces = ['    ', '   ', '  ', ' '];
  var detabLine = function(text) {
    var start = 0;
    var offset;
    var lastStop = 0;
    while ((offset = text.indexOf('\t', start)) !== -1) {
      var numspaces = (offset - lastStop) % 4;
      var spaces = tabSpaces[numspaces];
      text = text.slice(0, offset) + spaces + text.slice(offset + 1);
      lastStop = offset + numspaces;
      start = lastStop;
    }
    return text;
  };
  var matchAt = function(re, s, offset) {
    var res = s.slice(offset).match(re);
    if (res === null) {
      return -1;
    } else {
      return offset + res.index;
    }
  };
  var endsWithBlankLine = function(block) {
    while (block) {
      if (block._lastLineBlank) {
        return true;
      }
      var t = block.type;
      if (t === 'List' || t === 'Item') {
        block = block._lastChild;
      } else {
        break;
      }
    }
    return false;
  };
  var breakOutOfLists = function(block) {
    var b = block;
    var last_list = null;
    do {
      if (b.type === 'List') {
        last_list = b;
      }
      b = b._parent;
    } while (b);
    if (last_list) {
      while (block !== last_list) {
        this.finalize(block, this.lineNumber);
        block = block._parent;
      }
      this.finalize(last_list, this.lineNumber);
      this.tip = last_list._parent;
    }
  };
  var addLine = function(ln) {
    this.tip._string_content += ln.slice(this.offset) + '\n';
  };
  var addChild = function(tag, offset) {
    while (!this.blocks[this.tip.type].canContain(tag)) {
      this.finalize(this.tip, this.lineNumber - 1);
    }
    var column_number = offset + 1;
    var newBlock = new Node(tag, [[this.lineNumber, column_number], [0, 0]]);
    newBlock._string_content = '';
    this.tip.appendChild(newBlock);
    this.tip = newBlock;
    return newBlock;
  };
  var parseListMarker = function(ln, offset, indent) {
    var rest = ln.slice(offset);
    var match;
    var spaces_after_marker;
    var data = {
      type: null,
      tight: true,
      bulletChar: null,
      start: null,
      delimiter: null,
      padding: null,
      markerOffset: indent
    };
    if (rest.match(reHrule)) {
      return null;
    }
    if ((match = rest.match(reBulletListMarker))) {
      spaces_after_marker = match[1].length;
      data.type = 'Bullet';
      data.bulletChar = match[0][0];
    } else if ((match = rest.match(reOrderedListMarker))) {
      spaces_after_marker = match[3].length;
      data.type = 'Ordered';
      data.start = parseInt(match[1]);
      data.delimiter = match[2];
    } else {
      return null;
    }
    var blank_item = match[0].length === rest.length;
    if (spaces_after_marker >= 5 || spaces_after_marker < 1 || blank_item) {
      data.padding = match[0].length - spaces_after_marker + 1;
    } else {
      data.padding = match[0].length;
    }
    return data;
  };
  var listsMatch = function(list_data, item_data) {
    return (list_data.type === item_data.type && list_data.delimiter === item_data.delimiter && list_data.bulletChar === item_data.bulletChar);
  };
  var closeUnmatchedBlocks = function() {
    if (!this.allClosed) {
      while (this.oldtip !== this.lastMatchedContainer) {
        var parent = this.oldtip._parent;
        this.finalize(this.oldtip, this.lineNumber - 1);
        this.oldtip = parent;
      }
      this.allClosed = true;
    }
  };
  var blocks = {
    Document: {
      continue: function() {
        return 0;
      },
      finalize: function() {
        return ;
      },
      canContain: function(t) {
        return (t !== 'Item');
      },
      acceptsLines: false
    },
    List: {
      continue: function() {
        return 0;
      },
      finalize: function(parser, block) {
        var item = block._firstChild;
        while (item) {
          if (endsWithBlankLine(item) && item._next) {
            block._listData.tight = false;
            break;
          }
          var subitem = item._firstChild;
          while (subitem) {
            if (endsWithBlankLine(subitem) && (item._next || subitem._next)) {
              block._listData.tight = false;
              break;
            }
            subitem = subitem._next;
          }
          item = item._next;
        }
      },
      canContain: function(t) {
        return (t === 'Item');
      },
      acceptsLines: false
    },
    BlockQuote: {
      continue: function(parser, container, nextNonspace) {
        var ln = parser.currentLine;
        if (nextNonspace - parser.offset <= 3 && ln.charAt(nextNonspace) === '>') {
          parser.offset = nextNonspace + 1;
          if (ln.charAt(parser.offset) === ' ') {
            parser.offset++;
          }
        } else {
          return 1;
        }
        return 0;
      },
      finalize: function() {
        return ;
      },
      canContain: function(t) {
        return (t !== 'Item');
      },
      acceptsLines: false
    },
    Item: {
      continue: function(parser, container, nextNonspace) {
        if (nextNonspace === parser.currentLine.length) {
          parser.offset = nextNonspace;
        } else if (nextNonspace - parser.offset >= container._listData.markerOffset + container._listData.padding) {
          parser.offset += container._listData.markerOffset + container._listData.padding;
        } else {
          return 1;
        }
        return 0;
      },
      finalize: function() {
        return ;
      },
      canContain: function(t) {
        return (t !== 'Item');
      },
      acceptsLines: false
    },
    Header: {
      continue: function() {
        return 1;
      },
      finalize: function() {
        return ;
      },
      canContain: function() {
        return false;
      },
      acceptsLines: false
    },
    HorizontalRule: {
      continue: function() {
        return 1;
      },
      finalize: function() {
        return ;
      },
      canContain: function() {
        return false;
      },
      acceptsLines: false
    },
    CodeBlock: {
      continue: function(parser, container, nextNonspace) {
        var ln = parser.currentLine;
        var indent = nextNonspace - parser.offset;
        if (container._isFenced) {
          var match = (indent <= 3 && ln.charAt(nextNonspace) === container._fenceChar && ln.slice(nextNonspace).match(reClosingCodeFence));
          if (match && match[0].length >= container._fenceLength) {
            parser.finalize(container, parser.lineNumber);
            return 2;
          } else {
            var i = container._fenceOffset;
            while (i > 0 && ln.charAt(parser.offset) === ' ') {
              parser.offset++;
              i--;
            }
          }
        } else {
          if (indent >= CODE_INDENT) {
            parser.offset += CODE_INDENT;
          } else if (nextNonspace === ln.length) {
            parser.offset = nextNonspace;
          } else {
            return 1;
          }
        }
        return 0;
      },
      finalize: function(parser, block) {
        if (block._isFenced) {
          var content = block._string_content;
          var newlinePos = content.indexOf('\n');
          var firstLine = content.slice(0, newlinePos);
          var rest = content.slice(newlinePos + 1);
          block.info = unescapeString(firstLine.trim());
          block._literal = rest;
        } else {
          block._literal = block._string_content.replace(/(\n *)+$/, '\n');
        }
        block._string_content = null;
      },
      canContain: function() {
        return false;
      },
      acceptsLines: true
    },
    HtmlBlock: {
      continue: function(parser, container, nextNonspace) {
        return (nextNonspace === parser.currentLine.length ? 1 : 0);
      },
      finalize: function(parser, block) {
        block._literal = block._string_content.replace(/(\n *)+$/, '');
        block._string_content = null;
      },
      canContain: function() {
        return false;
      },
      acceptsLines: true
    },
    Paragraph: {
      continue: function(parser, container, nextNonspace) {
        return (nextNonspace === parser.currentLine.length ? 1 : 0);
      },
      finalize: function(parser, block) {
        var pos;
        var hasReferenceDefs = false;
        while (block._string_content.charAt(0) === '[' && (pos = parser.inlineParser.parseReference(block._string_content, parser.refmap))) {
          block._string_content = block._string_content.slice(pos);
          hasReferenceDefs = true;
        }
        if (hasReferenceDefs && isBlank(block._string_content)) {
          block.unlink();
        }
      },
      canContain: function() {
        return false;
      },
      acceptsLines: true
    }
  };
  var incorporateLine = function(ln) {
    var all_matched = true;
    var nextNonspace;
    var match;
    var data;
    var blank;
    var indent;
    var t;
    var container = this.doc;
    this.oldtip = this.tip;
    this.offset = 0;
    this.lineNumber += 1;
    if (ln.indexOf('\u0000') !== -1) {
      ln = ln.replace(/\0/g, '\uFFFD');
    }
    ln = detabLine(ln);
    this.currentLine = ln;
    var lastChild;
    while ((lastChild = container._lastChild) && lastChild._open) {
      container = lastChild;
      match = matchAt(reNonSpace, ln, this.offset);
      if (match === -1) {
        nextNonspace = ln.length;
      } else {
        nextNonspace = match;
      }
      switch (this.blocks[container.type].continue(this, container, nextNonspace)) {
        case 0:
          break;
        case 1:
          all_matched = false;
          break;
        case 2:
          this.lastLineLength = ln.length;
          return ;
        default:
          throw 'continue returned illegal value, must be 0, 1, or 2';
      }
      if (!all_matched) {
        container = container._parent;
        break;
      }
    }
    blank = nextNonspace === ln.length;
    this.allClosed = (container === this.oldtip);
    this.lastMatchedContainer = container;
    if (blank && container._lastLineBlank) {
      this.breakOutOfLists(container);
    }
    while ((t = container.type) && !(t === 'CodeBlock' || t === 'HtmlBlock')) {
      match = matchAt(reNonSpace, ln, this.offset);
      if (match === -1) {
        nextNonspace = ln.length;
        blank = true;
        break;
      } else {
        nextNonspace = match;
        blank = false;
      }
      indent = nextNonspace - this.offset;
      if (indent < CODE_INDENT && !reMaybeSpecial.test(ln.slice(nextNonspace))) {
        this.offset = nextNonspace;
        break;
      }
      if (indent >= CODE_INDENT) {
        if (this.tip.type !== 'Paragraph' && !blank) {
          this.offset += CODE_INDENT;
          this.closeUnmatchedBlocks();
          container = this.addChild('CodeBlock', this.offset);
        } else {
          this.offset = nextNonspace;
        }
        break;
      } else if (ln.charAt(nextNonspace) === '>') {
        this.offset = nextNonspace + 1;
        if (ln.charAt(this.offset) === ' ') {
          this.offset++;
        }
        this.closeUnmatchedBlocks();
        container = this.addChild('BlockQuote', nextNonspace);
      } else if ((match = ln.slice(nextNonspace).match(reATXHeaderMarker))) {
        this.offset = nextNonspace + match[0].length;
        this.closeUnmatchedBlocks();
        container = this.addChild('Header', nextNonspace);
        container.level = match[0].trim().length;
        container._string_content = ln.slice(this.offset).replace(/^ *#+ *$/, '').replace(/ +#+ *$/, '');
        this.offset = ln.length;
        break;
      } else if ((match = ln.slice(nextNonspace).match(reCodeFence))) {
        var fenceLength = match[0].length;
        this.closeUnmatchedBlocks();
        container = this.addChild('CodeBlock', nextNonspace);
        container._isFenced = true;
        container._fenceLength = fenceLength;
        container._fenceChar = match[0][0];
        container._fenceOffset = indent;
        this.offset = nextNonspace + fenceLength;
      } else if (matchAt(reHtmlBlockOpen, ln, nextNonspace) !== -1) {
        this.closeUnmatchedBlocks();
        container = this.addChild('HtmlBlock', this.offset);
        break;
      } else if (t === 'Paragraph' && (container._string_content.indexOf('\n') === container._string_content.length - 1) && ((match = ln.slice(nextNonspace).match(reSetextHeaderLine)))) {
        this.closeUnmatchedBlocks();
        var header = new Node('Header', container.sourcepos);
        header.level = match[0][0] === '=' ? 1 : 2;
        header._string_content = container._string_content;
        container.insertAfter(header);
        container.unlink();
        container = header;
        this.tip = header;
        this.offset = ln.length;
        break;
      } else if (matchAt(reHrule, ln, nextNonspace) !== -1) {
        this.closeUnmatchedBlocks();
        container = this.addChild('HorizontalRule', nextNonspace);
        this.offset = ln.length;
        break;
      } else if ((data = parseListMarker(ln, nextNonspace, indent))) {
        this.closeUnmatchedBlocks();
        this.offset = nextNonspace + data.padding;
        if (t !== 'List' || !(listsMatch(container._listData, data))) {
          container = this.addChild('List', nextNonspace);
          container._listData = data;
        }
        container = this.addChild('Item', nextNonspace);
        container._listData = data;
      } else {
        this.offset = nextNonspace;
        break;
      }
    }
    if (!this.allClosed && !blank && this.tip.type === 'Paragraph') {
      this.addLine(ln);
    } else {
      this.closeUnmatchedBlocks();
      if (blank && container.lastChild) {
        container.lastChild._lastLineBlank = true;
      }
      t = container.type;
      var lastLineBlank = blank && !(t === 'BlockQuote' || (t === 'CodeBlock' && container._isFenced) || (t === 'Item' && !container._firstChild && container.sourcepos[0][0] === this.lineNumber));
      var cont = container;
      while (cont) {
        cont._lastLineBlank = lastLineBlank;
        cont = cont._parent;
      }
      if (this.blocks[t].acceptsLines) {
        this.addLine(ln);
      } else if (this.offset < ln.length && !blank) {
        container = this.addChild('Paragraph', this.offset);
        this.offset = nextNonspace;
        this.addLine(ln);
      }
    }
    this.lastLineLength = ln.length;
  };
  var finalize = function(block, lineNumber) {
    var above = block._parent || this.top;
    block._open = false;
    block.sourcepos[1] = [lineNumber, this.lastLineLength];
    this.blocks[block.type].finalize(this, block);
    this.tip = above;
  };
  var processInlines = function(block) {
    var node,
        event,
        t;
    var walker = block.walker();
    this.inlineParser.refmap = this.refmap;
    while ((event = walker.next())) {
      node = event.node;
      t = node.type;
      if (!event.entering && (t === 'Paragraph' || t === 'Header')) {
        this.inlineParser.parse(node);
      }
    }
  };
  var Document = function() {
    var doc = new Node('Document', [[1, 1], [0, 0]]);
    return doc;
  };
  var parse = function(input) {
    this.doc = new Document();
    this.tip = this.doc;
    this.refmap = {};
    this.lineNumber = 0;
    this.lastLineLength = 0;
    this.offset = 0;
    this.lastMatchedContainer = this.doc;
    this.currentLine = "";
    if (this.options.time) {
      console.time("preparing input");
    }
    var lines = input.split(reLineEnding);
    var len = lines.length;
    if (input.charAt(input.length - 1) === '\n') {
      len -= 1;
    }
    if (this.options.time) {
      console.timeEnd("preparing input");
    }
    if (this.options.time) {
      console.time("block parsing");
    }
    for (var i = 0; i < len; i++) {
      this.incorporateLine(lines[i]);
    }
    while (this.tip) {
      this.finalize(this.tip, len);
    }
    if (this.options.time) {
      console.timeEnd("block parsing");
    }
    if (this.options.time) {
      console.time("inline parsing");
    }
    this.processInlines(this.doc);
    if (this.options.time) {
      console.timeEnd("inline parsing");
    }
    return this.doc;
  };
  function Parser(options) {
    return {
      doc: new Document(),
      blocks: blocks,
      tip: this.doc,
      oldtip: this.doc,
      currentLine: "",
      lineNumber: 0,
      offset: 0,
      allClosed: true,
      lastMatchedContainer: this.doc,
      refmap: {},
      lastLineLength: 0,
      inlineParser: new InlineParser(),
      breakOutOfLists: breakOutOfLists,
      addLine: addLine,
      addChild: addChild,
      incorporateLine: incorporateLine,
      finalize: finalize,
      processInlines: processInlines,
      closeUnmatchedBlocks: closeUnmatchedBlocks,
      parse: parse,
      options: options || {}
    };
  }
  module.exports = Parser;
})(require("process"));
