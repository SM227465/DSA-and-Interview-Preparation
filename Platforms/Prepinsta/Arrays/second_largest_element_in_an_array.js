// single pass:

function findSecondLargestInAnArray(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num < largest && num > secondLargest) {
      secondLargest = num;
    }
  }
  
  return secondLargest;
}

// Sort and pick

/*
function findSecondLargestInAnArray(arr) {
  const uniqueArr = [...new Set(arr)];

  if (uniqueArr.length < 2) {
    return null;
  } else {
    uniqueArr.sort((a, b) => b - a);
    return uniqueArr[1];
  }
}
*/

console.log(findSecondLargestInAnArray([10, 45, 2, 78, 34, 78]));
console.log(findSecondLargestInAnArray([70, 40, 30, 20, 10, 90]));
