// single pass

function findSecondSmallestInAnArray(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num > smallest && num < secondSmallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}

// Sort and pick

/*
function findSecondSmallestInAnArray(arr) {
  const uniqueArr = [...new Set(arr)];

  if (uniqueArr.length < 2) {
    return null;
  }

  uniqueArr.sort((a, b) => a - b);
  return uniqueArr[1];
}
*/

console.log(findSecondSmallestInAnArray([10, 45, 2, 78, 34, 2]));
console.log(findSecondSmallestInAnArray([70, 40, 30, 20, 10, 90]));
