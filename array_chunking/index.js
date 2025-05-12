function chunkArray(arr, size) {
  const result = [];

  for (let i = 0; i < arr.length; i = i + size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4], 2));
console.log(chunkArray([1, 2, 3, 4, 5], 2));
console.log(chunkArray([], 3));
console.log(chunkArray([1, 2, 3], 5));
