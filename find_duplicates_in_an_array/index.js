const input = [1, 2, 3, 4, 2, 3, 5, 6];
// console.log(findDuplicates(data)); // Output: [2, 3]

function findDuplicates(input) {
  const seen = new Set();
  const duplicte = new Set();

  for (const item of input) {
    if (seen.has(item)) {
      duplicte.add(item);
    } else {
      seen.add(item);
    }
  }

  return Array.from(duplicte);
}

console.log(findDuplicates(input));
