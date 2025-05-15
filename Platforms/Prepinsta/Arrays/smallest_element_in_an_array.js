// using a loop:

function findSmallestElementInAnArray(arr) {
  let smallestElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
    }
  }

  return smallestElement;
}

console.log(findSmallestElementInAnArray([10, 45, 2, 78, 34]));
console.log(findSmallestElementInAnArray([34, 5, 89, 90, 56]));
