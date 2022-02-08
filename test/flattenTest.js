const flatten = require('../flatten');
const assert = require('chai').assert;

describe('#flatten', () => {
  it('should return [1, 2, "hello", "test", "array", 3, 4, 5] for [1, 2, ["hello", "test", "array"], 3, 4, 5]', () => {
    let testArray = [1, 2, ["hello", "test", "array"], 3, 4, 5];
    let expectedArray = [1, 2, "hello", "test", "array", 3, 4, 5];
    assert.deepEqual(flatten(testArray), expectedArray);
  });

  it('should return [] for []', () => {
    assert.deepEqual(flatten([]), []);
  });

  it('should return [1] for [1]', () => {
    assert.deepEqual(flatten([1]), [1]);
  });
});