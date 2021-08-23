const numbers = [1, 2, 3];
const numbers2 = [1, -2, 3];
const numbers3 = [-1, -2, -3];

// lets imagine we want to check and see if all numbers in this the array are positive
const allPositive = numbers.every(function (value) {
  return value >= 0;
});

const allPositive2 = numbers2.every(function (value) {
  return value >= 0;
});

/* every() method iterate all over the elements in the array and check the condition for every individual element and return true if the condition is satisfied for every element in the array, if one of the elements does not satisfied the condition it will return false and stop itrating for rest of the elements */

console.log(allPositive);
console.log(allPositive2);

/* lets imagine we want to check and see if we have at least one element in this array that matches the criteria, here we are going to check if at least one positive number in this array */
const atLeastOnePositive = numbers2.some(function (value) {
  return value >= 0;
});

const atLeastOnePositive2 = numbers3.some(function (value) {
  return value >= 0;
});

/* some() method will run callback function for every elements in the array, if one of the element match the criteria it will return true and search will be terminate for rest of the elements */

console.log(atLeastOnePositive);
console.log(atLeastOnePositive2);
