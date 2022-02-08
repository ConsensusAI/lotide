const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  let key;
  for (let item in object) {
    if (callback(object[item])) {
      key = item;
      break;
    }
  }
  return key;
};

module.exports = findKey;
//Test
let stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
let callback = x => x.stars === 2;

assertEqual(findKey(stars, callback), "noma");