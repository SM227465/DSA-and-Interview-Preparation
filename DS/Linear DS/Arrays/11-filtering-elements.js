const numbers = [1, 2, -3, 4, 5, 6];
const users = [
  { firstName: 'Lourdes', lastName: 'Browning', age: 26 },
  { firstName: 'Ayla', lastName: 'Cornell', age: 22 },
  { firstName: 'Leo', lastName: 'Gillespie', age: 52 },
  { firstName: 'Jennifer', lastName: 'Hardy', age: 30 },
  { firstName: 'Kate', lastName: 'Morrison', age: 24 },
  { firstName: 'Eliana', lastName: 'Stout', age: 22 },
  { firstName: 'Cristian', lastName: 'Vega', age: 30 },
  { firstName: 'Aarav', lastName: 'Lynn', age: 26 },
];
// lets imagine we want return all positive numbers
const allPositive = numbers.filter(function (value) {
  return value >= 0;
});

// lets filter odd values
const oddValues = numbers.filter(function (number) {
  return number % 2;
});

// lets filter even values
const evenValues = numbers.filter(function (number) {
  return number % 2 === 0;
});

// lets filter values greter than 4
const greaterThan4 = numbers.filter(function (number) {
  return number > 4;
});

// lets find full name of user whose age is less than 30 using reduce() method
const lessThan30 = users
  .filter((user) => user.age < 30)
  .map((user) => user.firstName + ' ' + user.lastName);

/* filter() method will run callback function for every elements in the array, if any element matches the criteria it will add the element to a new array */
console.log(allPositive);
console.log(oddValues);
console.log(evenValues);
console.log(greaterThan4);
console.log(lessThan30);
