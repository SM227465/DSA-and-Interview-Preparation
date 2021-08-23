const numbers = [5, 1, 3, 2, 6];
const users = [
  { firstName: 'Lourdes', lastName: 'Browning', age: 26 },
  { firstName: 'Ayla', lastName: 'Cornell', age: 22 },
  { firstName: 'Leo', lastName: 'Gillespie', age: 52 },
  { firstName: 'Jennifer', lastName: 'Hardy', age: 30 },
];

/* suppose we have this array and we want to transform this array, transformation means we want to transform each and every elements of this array and get a new array out of it.

here we want get double value of each elements in original array into a new array */
const double = numbers.map(function (number) {
  return number * 2;
});

// lets find the full name of users
const fullName = users.map(function (user) {
  return user.firstName + ' ' + user.lastName;
});

/*  map() method is used to transform an array, it runs callback fuction for each and every elements in the array, and return a new array */
console.log(double);
console.log(fullName);
