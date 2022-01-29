const assertEqual = function(actual, expected) {
  console.log(Array.isArray(actual) + Array.isArray(expected));
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
};

const assertArraysEqual = function(originalArray, comparedArray) {
  if (eqArrays(originalArray, comparedArray)) {
    console.log(`✅✅✅ Assertion Passed: ${originalArray} === ${comparedArray}`);
  } else if (!eqArrays(originalArray, comparedArray)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${originalArray} !== ${comparedArray}`);
  }
};

const letterPositions = function(sentence) {
  let positions = {};
  let i = 0;
  for (let letter of sentence) {
    if (letter === " ") {
      i++;
      continue;
    }
    if (positions[letter]) {
      positions[letter].push(i);
    } else {
      positions[letter] = [i];
    }
    i++;
    console.log(positions);
  }
  return positions;
};

//Test
let test = "hello";
let testResult = letterPositions(test);
assertArraysEqual(testResult["h"], [0]);
assertArraysEqual(testResult["e"], [1]);
assertArraysEqual(testResult["l"], [2, 3]);
assertArraysEqual(testResult["o"], [4]);
console.log(testResult["h"]);