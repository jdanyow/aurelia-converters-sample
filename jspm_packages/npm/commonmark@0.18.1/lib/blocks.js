/* */ 
(function(process) {
  "use strict";
  var Node = require("./node");
  var unescapeString = require("./common").unescapeString;
  var CODE_INDENT = 4;
  var C_NEWLINE = 10;
  var C_GREATERTHAN = 62;
  var C_SPACE = 32;
  var C_OPEN_BRACKET = 91;
  var InlineParser = require("./inlines");
  var BLOCKTAGNAME = '(?:article|header|aside|hgroup|iframe|blockquote|hr|body|li|map|button|object|canvas|ol|caption|output|col|p|colgroup|pre|dd|progress|div|section|dl|table|td|dt|tbody|embed|textarea|fieldset|tfoot|figcaption|th|figure|thead|footer|footer|tr|form|ul|h1|h2|h3|h4|h5|h6|video|script|style)';
  var HTMLBLOCKOPEN = "<(?:" + BLOCKTAGNAME + "[\\s/>]" + "|" + "/" + BLOCKTAGNAME + "[\\s>]" + "|" + "[?!])";
  var reHtmlBlockOpen = new RegExp('^' + HTMLBLOCKOPEN, 'i');
  var reHrule = /^(?:(?:\* *){3,}|(?:_ *){3,}|(?:- *){3,}) *$/;
  var reMaybeSpecial = /^[#`~*+_=<>0-9-]/;
  var reNonSpace = /[^ \t\f\v\r\n]/;
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
  var peek = function(ln, pos) {
    if (pos < ln.length) {
      return ln.charCodeAt(pos);
    } else {
      return -1;
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
  var addLine = function() {
    this.tip._string_content += this.currentLine.slice(this.offset) + '\n';
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
      continue: function(parser) {
        var ln = parser.currentLine;
        if (parser.indent <= 3 && peek(ln, parser.nextNonspace) === C_GREATERTHAN) {
          parser.offset = parser.nextNonspace + 1;
          if (peek(ln, parser.offset) === C_SPACE) {
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
      continue: function(parser, container) {
        if (parser.blank) {
          parser.offset = parser.nextNonspace;
        } else if (parser.indent >= container._listData.markerOffset + container._listData.padding) {
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
      continue: function(parser, container) {
        var ln = parser.currentLine;
        var indent = parser.indent;
        if (container._isFenced) {
          var match = (indent <= 3 && ln.charAt(parser.nextNonspace) === container._fenceChar && ln.slice(parser.nextNonspace).match(reClosingCodeFence));
          if (match && match[0].length >= container._fenceLength) {
            parser.finalize(container, parser.lineNumber);
            return 2;
          } else {
            var i = container._fenceOffset;
            while (i > 0 && peek(ln, parser.offset) === C_SPACE) {
              parser.offset++;
              i--;
            }
          }
        } else {
          if (indent >= CODE_INDENT) {
            parser.offset += CODE_INDENT;
          } else if (parser.blank) {
            parser.offset = parser.nextNonspace;
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
      continue: function(parser) {
        return (parser.blank ? 1 : 0);
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
      continue: function(parser) {
        return (parser.blank ? 1 : 0);
      },
      finalize: function(parser, block) {
        var pos;
        var hasReferenceDefs = false;
        while (peek(block._string_content, 0) === C_OPEN_BRACKET && (pos = parser.inlineParser.parseReference(block._string_content, parser.refmap))) {
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
  var blockStarts = [function(parser) {
    if (parser.indent >= CODE_INDENT) {
      if (parser.tip.type !== 'Paragraph' && !parser.blank) {
        parser.offset += CODE_INDENT;
        parser.closeUnmatchedBlocks();
        parser.addChild('CodeBlock', parser.offset);
      } else {
        parser.offset = parser.nextNonspace;
      }
      return 2;
    } else {
      return 0;
    }
  }, function(parser) {
    if (peek(parser.currentLine, parser.nextNonspace) === C_GREATERTHAN) {
      parser.offset = parser.nextNonspace + 1;
      if (peek(parser.currentLine, parser.offset) === C_SPACE) {
        parser.offset++;
      }
      parser.closeUnmatchedBlocks();
      parser.addChild('BlockQuote', parser.nextNonspace);
      return 1;
    } else {
      return 0;
    }
  }, function(parser) {
    var match;
    if ((match = parser.currentLine.slice(parser.nextNonspace).match(reATXHeaderMarker))) {
      parser.offset = parser.nextNonspace + match[0].length;
      parser.closeUnmatchedBlocks();
      var container = parser.addChild('Header', parser.nextNonspace);
      container.level = match[0].trim().length;
      container._string_content = parser.currentLine.slice(parser.offset).replace(/^ *#+ *$/, '').replace(/ +#+ *$/, '');
      parser.offset = parser.currentLine.length;
      return 2;
    } else {
      return 0;
    }
  }, function(parser) {
    var match;
    if ((match = parser.currentLine.slice(parser.nextNonspace).match(reCodeFence))) {
      var fenceLength = match[0].length;
      parser.closeUnmatchedBlocks();
      var container = parser.addChild('CodeBlock', parser.nextNonspace);
      container._isFenced = true;
      container._fenceLength = fenceLength;
      container._fenceChar = match[0][0];
      container._fenceOffset = parser.indent;
      parser.offset = parser.nextNonspace + fenceLength;
      return 2;
    } else {
      return 0;
    }
  }, function(parser) {
    if (reHtmlBlockOpen.test(parser.currentLine.slice(parser.nextNonspace))) {
      parser.closeUnmatchedBlocks();
      parser.addChild('HtmlBlock', parser.offset);
      return 2;
    } else {
      return 0;
    }
  }, function(parser, container) {
    var match;
    if (container.type === 'Paragraph' && (container._string_content.indexOf('\n') === container._string_content.length - 1) && ((match = parser.currentLine.slice(parser.nextNonspace).match(reSetextHeaderLine)))) {
      parser.closeUnmatchedBlocks();
      var header = new Node('Header', container.sourcepos);
      header.level = match[0][0] === '=' ? 1 : 2;
      header._string_content = container._string_content;
      container.insertAfter(header);
      container.unlink();
      parser.tip = header;
      parser.offset = parser.currentLine.length;
      return 2;
    } else {
      return 0;
    }
  }, function(parser) {
    if (reHrule.test(parser.currentLine.slice(parser.nextNonspace))) {
      parser.closeUnmatchedBlocks();
      parser.addChild('HorizontalRule', parser.nextNonspace);
      parser.offset = parser.currentLine.length;
      return 2;
    } else {
      return 0;
    }
  }, function(parser, container) {
    var data;
    if ((data = parseListMarker(parser.currentLine, parser.nextNonspace, parser.indent))) {
      parser.closeUnmatchedBlocks();
      parser.offset = parser.nextNonspace + data.padding;
      if (parser.tip.type !== 'List' || !(listsMatch(container._listData, data))) {
        container = parser.addChild('List', parser.nextNonspace);
        container._listData = data;
      }
      container = parser.addChild('Item', parser.nextNonspace);
      container._listData = data;
      return 1;
    } else {
      return 0;
    }
  }];
  var findNextNonspace = function() {
    var currentLine = this.currentLine;
    var match = currentLine.slice(this.offset).match(reNonSpace);
    if (match === null) {
      this.nextNonspace = currentLine.length;
      this.blank = true;
    } else {
      this.nextNonspace = this.offset + match.index;
      this.blank = false;
    }
    this.indent = this.nextNonspace - this.offset;
  };
  var incorporateLine = function(ln) {
    var all_matched = true;
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
      this.findNextNonspace();
      switch (this.blocks[container.type].continue(this, container)) {
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
    this.allClosed = (container === this.oldtip);
    this.lastMatchedContainer = container;
    if (this.blank && container._lastLineBlank) {
      this.breakOutOfLists(container);
    }
    var matchedLeaf = container.type !== 'Paragraph' && blocks[container.type].acceptsLines;
    var starts = this.blockStarts;
    var startsLen = starts.length;
    while (!matchedLeaf) {
      this.findNextNonspace();
      if (this.indent < CODE_INDENT && !reMaybeSpecial.test(ln.slice(this.nextNonspace))) {
        this.offset = this.nextNonspace;
        break;
      }
      var i = 0;
      while (i < startsLen) {
        var res = starts[i](this, container);
        if (res === 1) {
          container = this.tip;
          break;
        } else if (res === 2) {
          container = this.tip;
          matchedLeaf = true;
          break;
        } else {
          i++;
        }
      }
      if (i === startsLen) {
        this.offset = this.nextNonspace;
        break;
      }
    }
    if (!this.allClosed && !this.blank && this.tip.type === 'Paragraph') {
      this.addLine();
    } else {
      this.closeUnmatchedBlocks();
      if (this.blank && container.lastChild) {
        container.lastChild._lastLineBlank = true;
      }
      t = container.type;
      var lastLineBlank = this.blank && !(t === 'BlockQuote' || (t === 'CodeBlock' && container._isFenced) || (t === 'Item' && !container._firstChild && container.sourcepos[0][0] === this.lineNumber));
      var cont = container;
      while (cont) {
        cont._lastLineBlank = lastLineBlank;
        cont = cont._parent;
      }
      if (this.blocks[t].acceptsLines) {
        this.addLine();
      } else if (this.offset < ln.length && !this.blank) {
        container = this.addChild('Paragraph', this.offset);
        this.offset = this.nextNonspace;
        this.addLine();
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
    if (input.charCodeAt(input.length - 1) === C_NEWLINE) {
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
      blockStarts: blockStarts,
      tip: this.doc,
      oldtip: this.doc,
      currentLine: "",
      lineNumber: 0,
      offset: 0,
      nextNonspace: 0,
      indent: 0,
      blank: false,
      allClosed: true,
      lastMatchedContainer: this.doc,
      refmap: {},
      lastLineLength: 0,
      inlineParser: new InlineParser(options),
      findNextNonspace: findNextNonspace,
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
