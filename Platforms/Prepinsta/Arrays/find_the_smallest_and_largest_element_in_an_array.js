// using a loop:

function findTheSmallestAndLargestElementInAnArray(arr) {
  let smallest = arr[0];
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }

    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return { smallest, largest };
}

console.log(findTheSmallestAndLargestElementInAnArray([10, 45, 2, 78, 34]));
console.log(findTheSmallestAndLargestElementInAnArray([10, 67, 89, 78, 34, 7, 95]));
