function sortByFrequency(arr) {
  const frequency = {};

  for (let item of arr) {
    frequency[item] = (frequency[item] || 0) + 1;
  }

  const frequencyArr = Object.entries(frequency);

  frequencyArr.sort((a, b) => a[1] - b[1]); // for descending b[1] - a[1]

  const result = [];

  for (let [num, freq] of frequencyArr) {
    for (let i = 0; i < freq; i++) {
      result.push(Number(num));
    }
  }

  return result;
}

console.log(sortByFrequency([10, 20, 10, 10, 20, 30, 30, 30, 30, 0]));
