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

const middle = (array) => {
  let middleArray = [];
  if (array.length <= 2 && array.length >= 0) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    middleArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    middleArray.push(array[(array.length / 2) - 1], array[array.length / 2]);
  }
  return middleArray;
}

// Test Code
let testArray = [1, 2, 3, 4, 5, 6];
let expectedArray = [3, 4];
assertArraysEqual(middle(testArray), expectedArray);