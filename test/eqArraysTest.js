const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('should return true for the same array', () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('should return false for different arrays', () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  it('should return false for a longer array', () => {
    assert.equal(eqArrays([1, 2], [1, 2, 3]), false);
  });

  it('should return false for values of different types', () => {
    assert.equal(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});