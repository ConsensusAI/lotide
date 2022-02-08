const letterPositions = function(string) {
  let positions = {};
  let i = 0;
  for (let letter of string) {
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
  }
  return positions;
};

module.exports = letterPositions;