const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('should return the correct indices of each letter', () => {
    const LHL = "lighthouse in the house";
    const positions = { 
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    }
    assert.deepEqual(letterPositions(LHL), positions);    
  });

  it('should return an empty object for an empty string', () => {
    const string = "";
    const positions = {};
    assert.deepEqual(letterPositions(string), positions);
  });
});