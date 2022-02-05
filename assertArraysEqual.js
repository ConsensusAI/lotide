const eqArrays = require('./eqArrays');

const assertArraysEqual = function(originalArray, comparedArray) {
  if (eqArrays(originalArray, comparedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${originalArray} === ${comparedArray}`);
  } else if (!eqArrays(originalArray, comparedArray)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${originalArray} !== ${comparedArray}`);
  }
};

module.exports = assertArraysEqual;