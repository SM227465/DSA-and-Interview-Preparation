function firstNonRepeatingChar(inputString) {
  let charCount = {};

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (!charCount[char]) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];

    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstNonRepeatingChar('aabbcdd'));
console.log(firstNonRepeatingChar('swiss'));
console.log(firstNonRepeatingChar('racecars'));
console.log(firstNonRepeatingChar('abcdef'));
console.log(firstNonRepeatingChar('aabccdbe'));
