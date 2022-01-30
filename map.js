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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Test
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
const numbers = [5, 10, 16, 17, 20, 21];
const divisibleByFive = map(numbers, x => x % 5 === 0);
console.log(divisibleByFive);