const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// Test Code
let testArray = [1, 2, 3, 4, 5, 6];
let expectedArray = [3, 4];
assertArraysEqual(middle(testArray), expectedArray);