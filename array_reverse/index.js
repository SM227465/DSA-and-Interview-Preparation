/* function to reverse an array without using in-build function
input = [1, 2, 3, 4, 5] 
output  [5,4,3,2,1]
*/

const originalArray = [1, 2, 3, 4, 5];
// Reverse using a for loop
function reverseAnArray(originalArray) {
  let reversedArray = [];

  for (let i = originalArray.length - 1; i >= 0; i--) {
    reversedArray[reversedArray.length] = originalArray[i];
  }

  return reversedArray;
}

console.log(reverseAnArray(originalArray));

// In-place reverse (modifies original array)

function reverseInPlace(originalArray) {
  let start = 0;
  let end = originalArray.length - 1;

  while (start < end) {
    let temp = originalArray[start];
    originalArray[start] = originalArray[end];
    originalArray[end] = temp;

    start++;
    end--;
  }

  return originalArray;
}

console.log(reverseInPlace(originalArray));
