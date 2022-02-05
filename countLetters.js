const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let countedLetters = {};
  for (let letter of sentence) {
    if (letter === " ") {
      continue;
    }
    if (countedLetters[letter]) {
      countedLetters[letter] += 1;
    } else {
      countedLetters[letter] = 1;
    }
  }
  return countedLetters;
};

module.exports = countLetters;
//Test
let test = "lighthouse in the house";
let resultTest = countLetters(test);
assertEqual(resultTest["e"], 3);
console.log(resultTest);