var esprima = require('esprima'),
    escodegen = require('escodegen');

module.exports = function (fn) {
  var ast = esprima.parse(fn.toString(), {
    tolerant: true,
    comment: true,
    range: true,
    tokens: true
  });

  // TODO: unstable API, see https://github.com/Constellation/escodegen/issues/10
  ast = escodegen.attachComments(ast, ast.comments, ast.tokens);

  return escodegen.generate(ast, {
    format: {
      indent: {
        style: '  '
      }
    },
    comment: true
  });
};
