const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = array;
  tailArray.shift();
  return tailArray;
};

const emptyArray = [];
const singleValueArray = [1];

assertEqual(tail(emptyArray)[0], undefined);
assertEqual(tail(singleValueArray)[0], undefined);