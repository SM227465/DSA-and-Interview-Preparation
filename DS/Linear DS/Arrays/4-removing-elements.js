const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);

// Remove from end
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Remove from beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// Remove from middle
const middle = numbers.splice(2, 2);
console.log(middle);
console.log(numbers);
