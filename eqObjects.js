const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let equality = true;
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      equality = false;
    }
  }
  return equality;
};

/*
1. Same number of keys
2. Value for each key is the same in each object
*/

const eqObjects = function(object1, object2) {
  let result = true;
  let keys1 = Object.keys(object1);
  let numberOfKeys1 = Object.keys(object1).length;
  let numberOfKeys2 = Object.keys(object2).length;
  if (numberOfKeys1 !== numberOfKeys2) {
    return false;
  }
  for (let item of keys1) {
    if (Array.isArray(object1[item]) || Array.isArray(object2[item])) {
      if (!eqArrays(object1[item], object2[item])) {
        return false;
      }
    } else if (object1[item] !== object2[item]) {
      return false;
    }
  }
  return result;
};

//Test
const ab = {a: "1", b: "2"};
const ba = {b: "2", a: "1"};
const abc = {a: "1", b: "2", c: "3"};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
const genresAndShows = {
  sci_fi: "The Expanse",
  drama: "The Wire",
  comedy: "Brooklyn Nine-Nine",
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(bestTVShowsByGenre, genresAndShows), true);
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);