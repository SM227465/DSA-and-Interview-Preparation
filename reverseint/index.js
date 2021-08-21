// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Method - 1
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

// Method - 2
// function reverseInt(number) {
//   let reverse = 0;

//   if (number < 0) {
//     let positiveNumber = number * Math.sign(number);

//     while (positiveNumber > 0) {
//       reverse = reverse * 10 + (positiveNumber % 10);
//       positiveNumber = Math.floor(positiveNumber / 10);
//     }
//     return reverse * Math.sign(number);
//   } else {
//     while (number > 0) {
//       reverse = reverse * 10 + (number % 10);
//       number = Math.floor(number / 10);
//     }
//     return reverse;
//   }
// }

module.exports = reverseInt;
