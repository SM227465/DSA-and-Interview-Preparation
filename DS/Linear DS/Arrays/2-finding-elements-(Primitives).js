const numbers = [1, 2, 3, 1, 4];

/* in the method 
1. indexof() we pass the element we are looking for, if the elemet exits in the array this method will return the index of that element in the array, if the element does not exits it will return -1,

2. lastIndexOf() it will return last index of the given elemet or -1 if element does not exits.

lets see some example
*/
console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(1));
console.log(numbers.indexOf('1'));
console.log(numbers.indexOf(2));
console.log(numbers.lastIndexOf(1));

/* checking if elements exits in the array, if exits it will return true otherwise false*/

// Method - 1
console.log(numbers.indexOf(4) !== -1);

// Method - 2
console.log(numbers.includes(4));

/*All these methods has a 2nd optional parameter fromIndex that the index at where search will begin,

for example*/
console.log(numbers.indexOf(1, 2));
