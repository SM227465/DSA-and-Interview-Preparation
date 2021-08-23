const numbers = [1, 2, 3, 4, 5, 6];
const users = [
  { firstName: 'Lourdes', lastName: 'Browning', age: 26 },
  { firstName: 'Ayla', lastName: 'Cornell', age: 22 },
  { firstName: 'Leo', lastName: 'Gillespie', age: 52 },
  { firstName: 'Jennifer', lastName: 'Hardy', age: 30 },
  { firstName: 'Kate', lastName: 'Morrison', age: 24 },
  { firstName: 'Eliana', lastName: 'Stout', age: 22 },
  { firstName: 'Cristian', lastName: 'Vega', age: 31 },
  { firstName: 'Aarav', lastName: 'Lynn', age: 26 },
];

// lets assume we have to find sum of the all numbers inside the array
// Method - 1
let sum = 0;
for (let number of numbers) {
  sum = sum + number;
}
console.log(sum);

// Method - 2
function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

const result = findSum(numbers);
console.log(result);

// lets do the same thing using reduce() method
const output = numbers.reduce(function (accumulator, currentValue) {
  return (accumulator = accumulator + currentValue);
}, 0);

// lets find the maximum value using reduce() method
const findMax = numbers.reduce(function (max, curr) {
  if (curr > max) {
    max = curr;
  }

  return max;
});

// lets find same age persons using reduce() method
const ageCount = users.reduce(function (accumulator, currentUser) {
  if (accumulator[currentUser.age]) {
    accumulator[currentUser.age]++;
  } else {
    accumulator[currentUser.age] = 1;
  }

  return accumulator;
}, {});

// lets find full name of peoples above 30 age
const above30 = users.reduce(function (acc, curr) {
  if (curr.age > 30) {
    acc.push(curr.firstName + ' ' + curr.lastName);
  }
  return acc;
}, []);

/* 
reduce() method takes two parameter 1st is a callbck function and 2nd one is initial value of accumulator

1st - (callback function) callback function takes two parameter 1st one is accumulator and 2nd one is currentValue of the array

2nd - (initial value of accumulator) as a 2nd parameter of reduce() method we have to supply the initial value of accumulator which is a 1st parameter of callback function which is the 1st parameter of reduce() method,

if we dont supply or exclude the initial value of accumulator, accumulator will be set to the 1st element in the array by default

reduce() method runs callback function which iterate over each and every elements of the array, currentValue is reprsent the current value of the array in every loop, accumulator is used to accumulate those values
*/
console.log(output);
console.log(findMax);
console.log(ageCount);
console.log(above30);
