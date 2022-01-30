const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  let key;
  for (let item in object) {
    console.log(item);
    console.log(object[item]);
    if (callback(object[item])) {
      key = item;
      break;
    }
  }
  return key;
};

//Test
stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
callback = x => x.stars === 2;

assertEqual(findKey(stars, callback), "noma");