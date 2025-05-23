/*
Write a function that determines whether a given string is a valid palindrome.
A palindrome is a word, phrase, or sequence that reads the same backward as forward.
Ignore cases and all non-alphanumeric characters.

Input: A single string str.
Output: Return true if the string is a valid palindrome, false otherwise.
*/
function isValidPalindrome(str) {

  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let left = 0
  let right = cleaned.length - 1

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false
    }

    left++
    right--
  }

  return true
}

console.log(isValidPalindrome('A man, a plan, a canal: Panama'))
console.log(isValidPalindrome('race a car'))
console.log(isValidPalindrome(' '))
console.log(isValidPalindrome('1234'))
console.log(isValidPalindrome('!!!@@@###'))