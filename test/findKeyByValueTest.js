const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  it('should return for sci_fi for "The Expanse"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it('should return undefined for a value not found', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "Lost"), undefined);
  });
});