const assert = require('chai').assert;
const middle = require('../middle');

// Test Code
// let testArray = [1, 2, 3, 4, 5, 6];
// let expectedArray = [3, 4];
// assertArraysEqual(middle(testArray), expectedArray);

describe('#middle', () => {
  it("should return [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("should return [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return an empty array for arrays with 1 value", () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it("should return an empty array for arrays with 2 values", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});