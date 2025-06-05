function countVowels(str) {
  const vowles = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowles.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World!"));
