const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let equality = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equality = false;
    }
  }
  return equality;
}

const assertArraysEqual = function(originalArray, comparedArray) {
  if (eqArrays(originalArray, comparedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${originalArray} === ${comparedArray}`)
  } else if (!eqArrays(originalArray, comparedArray)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${originalArray} !== ${comparedArray}`);
  }
}

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  let removable = false;
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removable = true;
      }
    }
    if (!removable) {
      filteredArray.push(source[i]);
    }
    removable = false;
  }
  return filteredArray;
}

let numbers = [9, 15, "hello", true, false, true, "hell"];
let garbage = [15, true];
let goal = [9, "hello", false, "hell"];
assertArraysEqual(without(numbers, garbage), goal);