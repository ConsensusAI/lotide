const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (let keys in itemsToCount) {
    if (itemsToCount[keys]) {
      results[keys] = 0;
    } else {
      results[keys] = undefined;
    }
  }

  for (const item of allItems) {
    if (itemsToCount[item]) {
        results[item] += 1;
    }
  }
  return results;
};

module.exports = countOnly;