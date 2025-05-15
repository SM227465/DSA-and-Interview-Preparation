// using a loop:
function findLargestNumberInAnArray(arr) {
  let largestNumber = 0;

  for (let item of arr) {
    if (item > largestNumber) {
      largestNumber = item;
    }
  }

  return largestNumber;
}

/* Using Math.max() and spread operator

const arr = [10, 45, 2, 78, 34];
const largest = Math.max(...arr);
*/

/* using a loop:
const arr = [10, 45, 2, 78, 34];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Largest element is:", max);
*/

console.log(findLargestNumberInAnArray([10, 45, 2, 78, 34]));
console.log(findLargestNumberInAnArray([10, 89, 67, 56, 45, 78]));
