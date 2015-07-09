/* */ 
(function(process) {
  "use strict";
  var fs = require("fs");
  var commonmark = require("../lib/index");
  var escSeq = function(s) {
    return function() {
      process.stdout.write('\u001b' + s);
      return this;
    };
  };
  var repeat = function(pattern, count) {
    if (count < 1) {
      return '';
    }
    var result = '';
    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }
      count >>= 1;
      pattern += pattern;
    }
    return result + pattern;
  };
  var cursor = {
    write: function(s) {
      process.stdout.write(s);
      return this;
    },
    green: escSeq('[0;32m'),
    red: escSeq('[0;31m'),
    cyan: escSeq('[0;36m'),
    reset: escSeq('[0m')
  };
  var writer = new commonmark.HtmlRenderer();
  var reader = new commonmark.Parser();
  var readerSmart = new commonmark.Parser({smart: true});
  var results = {
    passed: 0,
    failed: 0
  };
  var showSpaces = function(s) {
    var t = s;
    return t.replace(/\t/g, '→').replace(/ /g, '␣');
  };
  var extractSpecTests = function(testfile) {
    var data = fs.readFileSync(testfile, 'utf8');
    var examples = [];
    var current_section = "";
    var example_number = 0;
    var tests = data.replace(/\r\n?/g, "\n").replace(/^<!-- END TESTS -->(.|[\n])*/m, '');
    tests.replace(/^\.\n([\s\S]*?)^\.\n([\s\S]*?)^\.$|^#{1,6} *(.*)$/gm, function(_, markdownSubmatch, htmlSubmatch, sectionSubmatch) {
      if (sectionSubmatch) {
        current_section = sectionSubmatch;
      } else {
        example_number++;
        examples.push({
          markdown: markdownSubmatch,
          html: htmlSubmatch,
          section: current_section,
          number: example_number
        });
      }
    });
    return examples;
  };
  var specTest = function(testcase, res, converter) {
    var actual = converter(testcase.markdown.replace(/→/g, '\t'));
    if (actual === testcase.html) {
      res.passed++;
      cursor.green().write('✓').reset();
    } else {
      res.failed++;
      cursor.write('\n');
      cursor.red().write('✘ Example ' + testcase.number + '\n');
      cursor.cyan();
      cursor.write('=== markdown ===============\n');
      cursor.write(showSpaces(testcase.markdown));
      cursor.write('=== expected ===============\n');
      cursor.write(showSpaces(testcase.html));
      cursor.write('=== got ====================\n');
      cursor.write(showSpaces(actual));
      cursor.reset();
    }
  };
  var specTests = function(testfile, res, converter) {
    cursor.write('Spec tests [' + testfile + ']:\n');
    var current_section = "";
    var examples = extractSpecTests(testfile);
    console.time("Elapsed time");
    for (var i = 0; i < examples.length; i++) {
      var testcase = examples[i];
      if (testcase.section !== current_section) {
        if (current_section !== '') {
          cursor.write('\n');
        }
        current_section = testcase.section;
        cursor.reset().write(current_section).reset().write('  ');
      }
      specTest(testcase, results, converter);
    }
    cursor.write('\n');
    console.timeEnd("Elapsed time");
    cursor.write('\n');
  };
  var pathologicalTest = function(testcase, res, converter) {
    cursor.write(testcase.name + ' ');
    console.time('  elapsed time');
    var actual = converter(testcase.input);
    if (actual === testcase.expected) {
      cursor.green().write('✓\n').reset();
      res.passed += 1;
    } else {
      cursor.red().write('✘\n');
      cursor.cyan();
      cursor.write('=== markdown ===============\n');
      cursor.write(showSpaces(testcase.input));
      cursor.write('=== expected ===============\n');
      cursor.write(showSpaces(testcase.expected));
      cursor.write('=== got ====================\n');
      cursor.write(showSpaces(actual));
      cursor.write('\n');
      cursor.reset();
      res.failed += 1;
    }
    console.timeEnd('  elapsed time');
  };
  specTests('test/spec.txt', results, function(x) {
    return writer.render(reader.parse(x));
  });
  specTests('test/smart_punct.txt', results, function(x) {
    return writer.render(readerSmart.parse(x));
  });
  cursor.write('Pathological cases:\n');
  var cases = [{
    name: 'U+0000 in input',
    input: 'abc\u0000xyz\u0000\n',
    expected: '<p>abc\ufffdxyz\ufffd</p>\n'
  }];
  var x;
  for (x = 1000; x <= 10000; x *= 10) {
    cases.push({
      name: 'nested strong emph ' + x + ' deep',
      input: repeat('*a **a ', x) + 'b' + repeat(' a** a*', x),
      expected: '<p>' + repeat('<em>a <strong>a ', x) + 'b' + repeat(' a</strong> a</em>', x) + '</p>\n'
    });
  }
  for (x = 1000; x <= 10000; x *= 10) {
    cases.push({
      name: 'nested brackets ' + x + ' deep',
      input: repeat('[', x) + 'a' + repeat(']', x),
      expected: '<p>' + repeat('[', x) + 'a' + repeat(']', x) + '</p>\n'
    });
  }
  for (x = 1000; x <= 10000; x *= 10) {
    cases.push({
      name: 'nested block quote ' + x + ' deep',
      input: repeat('> ', x) + 'a\n',
      expected: repeat('<blockquote>\n', x) + '<p>a</p>\n' + repeat('</blockquote>\n', x)
    });
  }
  var parse_and_render = function(x) {
    return writer.render(reader.parse(x));
  };
  for (var j = 0; j < cases.length; j++) {
    pathologicalTest(cases[j], results, parse_and_render);
  }
  cursor.write('\n');
  cursor.write(results.passed.toString() + ' tests passed, ' + results.failed.toString() + ' failed.\n');
  process.exit(results.failed);
})(require("process"));
