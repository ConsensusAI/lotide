const middle = (array) => {
  let middleArray = [];
  if (array.length <= 2 && array.length >= 0) {
    return middleArray;
  } else if (array.length % 2 !== 0) {
    middleArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    middleArray.push(array[(array.length / 2) - 1], array[array.length / 2]);
  }
  return middleArray;
};

module.exports = middle;