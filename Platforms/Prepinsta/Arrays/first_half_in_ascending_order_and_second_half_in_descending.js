function ascDscOrder(arr) {
  const mid = Math.floor(arr.length / 2);

  const firstHalf = arr.slice(0, mid).sort((a, b) => a - b);
  const secondHalf = arr.slice(mid).sort((a, b) => b - a);

  return [...firstHalf, ...secondHalf];
}


console.log(ascDscOrder([9, 2, 7, 4, 5, 6, 8, 3]));
console.log(ascDscOrder([3, 2, 4, 1, 10, 30, 40, 20]));


