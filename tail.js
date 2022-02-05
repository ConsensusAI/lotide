const assertEqual = require('./assertEqual');

const tail = function(array) {
  let tailArray = [];
  if (array.length <= 1) {
    return undefined;
  }
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

module.exports = tail;

console.log(tail([]));