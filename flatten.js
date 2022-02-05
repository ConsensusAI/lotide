const eqArrays = function(array1, array2) {
  let equality = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equality = false;
    }
  }
  return equality;
};

const assertArraysEqual = function(originalArray, comparedArray) {
  if (eqArrays(originalArray, comparedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${originalArray} === ${comparedArray}`);
  } else if (!eqArrays(originalArray, comparedArray)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${originalArray} !== ${comparedArray}`);
  }
};

const flatten = (array) => {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
// Test Code
let testArray = [1, 2, ["hello", "test", "array"], 3, 4, 5];
let expectedArray = [1, 2, "hello", "test", "array", 3, 4, 5];
assertArraysEqual(flatten(testArray), expectedArray);