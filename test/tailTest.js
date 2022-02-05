const assert = require('chai').assert;
const tail = require('../tail');

const emptyArray = [];
const singleValueArray = [1];

// assertEqual(tail(emptyArray)[0], undefined);
// assertEqual(tail(singleValueArray)[0], undefined);
describe('#tail', () => {
  it("should return [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });

  it("should return undefined for an empty array", () => {
    assert.deepEqual(tail([]), undefined);
  });

  it("should return undefined for a single value array", () => {
    assert.deepEqual(tail([1]), undefined);
  });
});