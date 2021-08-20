// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Method 1
function reverse(str) {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

// Method 2
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Method 3
// function reverse(str) {
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }

// Method 4
// function reverse(str) {
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//   }, '');
// }

module.exports = reverse;
