const input = [1, 2, 3, 4, 2, 3, 3, 5, 6, 2, 1, 1, 1];

function findDuplicatesWithCount(input) {
  const countMap = {};
  const duplicates = {};

  for (let item of input) {
    countMap[item] = (countMap[item] || 0) + 1;
  }

  for (const [key, count] of Object.entries(countMap)) {
    if (count > 1) {
      duplicates[key] = count;
    }
  }

  return duplicates;
}

console.log(findDuplicatesWithCount(input));
