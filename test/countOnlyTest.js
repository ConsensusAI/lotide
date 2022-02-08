const countOnly = require('../countOnly');
const assert = require('chai').assert;

describe('#countOnly', () => {
  it('should return correct object for items to count', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const toCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const expected = {"Jason": 1,
  "Karima": 0,
"Fang": 2,
"Agouhanna": undefined};
    assert.deepEqual(countOnly(firstNames, toCount), expected);
  });

  it('should return an empty object for an empty array', () => {
    const names = [];
    const toCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    const expected = {};
    assert.deepEqual(countOnly(names), expected);
  });
})