/*
Write a function findMaxNumber that takes an array of numbers as input and returns the largest number in the array.
If the array is empty, return null.

Constraints & Edge Cases:

Input is always an array.
Array can include positive, negative, and zero values.
If the array is empty, return null.
Array may include duplicate values.
Must not mutate the original array.
*/

function findMaxNumber(arr) {
  if (arr.length === 0) {
    return null;
  }

  let maxNumber = arr[0];

  for (let num of arr) {
    if (num > maxNumber) {
      maxNumber = num;
    }
  }

  return maxNumber;
}

console.log(findMaxNumber([1, 2, 3, 4, 5])); // → 5
console.log(findMaxNumber([-10, -20, -3, -1])); // → -1
console.log(findMaxNumber([42])); // → 42
console.log(findMaxNumber([])); // → null
console.log(findMaxNumber([100, 100, 100])); // → 100
