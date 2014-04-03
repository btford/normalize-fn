var normalize = require('../normalize');

describe('normalize', function () {
  it('should work with funny spaces', function () {
    expect(normalize('var x    =     y;')).toBe('var x = y;')
  });

  it('should work with functions', function () {
    expect(normalize(function foo () {var x = y;})).toBe('function foo() {\n  var x = y;\n}')
  });
});
