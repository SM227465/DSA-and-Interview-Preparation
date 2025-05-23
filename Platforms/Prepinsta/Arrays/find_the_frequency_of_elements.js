// Using an Object

function findFrequencyOfElements(arr) {
  const frequency = {};

  for (let element of arr) {
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }

  return frequency;
}

console.log(findFrequencyOfElements([1, 2, 2, 3, 4, 1, 2, 4, 3, 3]));
console.log(findFrequencyOfElements([10, 30, 10, 20, 10, 20, 30, 10]));


