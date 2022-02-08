const findKeyByValue = function(object, value) {
  let key;
  for (let item in object) {
    if (object[item] === value) {
      key = item;
    }
  }
  return key;
};

module.exports = findKeyByValue;