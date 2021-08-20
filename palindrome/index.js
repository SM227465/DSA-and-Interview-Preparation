// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Method - 1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');

//   return str === reversed;
// }

// Method - 2
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

// Method - 3
// function palindrome(str) {
//   let result = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     result = result + str[i];
//   }
//   return str === result;
// }

module.exports = palindrome;
