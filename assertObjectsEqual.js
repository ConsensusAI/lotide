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

const eqObjects = function(object1, object2) {
  let result = true;
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
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

const assertObjectsEqual = function(actual, expected) {

};