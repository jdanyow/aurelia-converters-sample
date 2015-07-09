/* */ 
var content = '# heading `code`\n _date_';
var d = '\
# heading `code` \
\
_date_\
';
console.log(d);
function md2AST(content) {
  var commonmark = require("./lib/index");
  var reader = new commonmark.Parser();
  return reader.parse(content);
}
function getTitleNode(content) {
  var walker = md2AST(content).walker();
  var event,
      node;
  while (event = walker.next()) {
    node = event.node;
    if (event.entering && node.type === 'Header' && node.level === 1) {
      return node;
    }
  }
}
function astNode2text(astNode) {
  var walker = astNode.walker();
  var acc = [];
  var event,
      node;
  while (event = walker.next()) {
    node = event.node;
    console.log(event.entering, node.type, walker.root.type);
    if (node.literal) {
      acc.push(node.literal);
    }
  }
  return acc.join(' ');
}
var result = astNode2text(getTitleNode(content));
console.log(result);
