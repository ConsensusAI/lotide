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

const takeUntil = (array, callback) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break;
    }
    result.push(array[i]);
  }
  return result;
};

module.exports = takeUntil;
//Test
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);