// Bubble Sort (Ascending Order):

function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

// To sort in Descending Order: Just change the condition arr[j] > arr[j + 1] to arr[j] < arr[j + 1]

console.log(sortArray([10, 2, 34, 1, 7]));
console.log(sortArray([10, 89, 67, 45, 83, 9, 12]));

