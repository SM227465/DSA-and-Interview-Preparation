let numbers = [1, 2, 3, 4];

console.log(numbers);

// Soluation - 1 (if you dont have any references)
// numbers = [];
// console.log(numbers);

// Soluation - 2
numbers.length = 0;
console.log(numbers);

// Solution - 3
// numbers.splice(0, numbers.length);
// console.log(numbers);

// Solution - 4
// while (numbers.length > 0) {
//   numbers.pop();
// }
// console.log(numbers);
