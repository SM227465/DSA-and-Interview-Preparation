/* Lets start by declaring a constant call numbers and set to this array with two elements 3 and 4 */
const numbers = [3, 4];

// Adding elements

// i) At the end
numbers.push(5, 6);

console.log(numbers);

// ii) At the Beginning
numbers.unshift(1, 2);

console.log(numbers);

// iii) In the middle
numbers.splice(2, 0, 'a', 'b');
/*
splice method takes 3 parameter

1st - start (it takes a number from where you want to add. so we want to add after 3 so our starting position basically the index of 3 is 2)

2nd - deleteCount (it takes a number that how many elemets you want to remove, here we dont want to remove any elemet so simple pass 0 as a parameter)

3rd - items (it takes elements that you want to add, here we want to add 'a' and 'b' as character so we pass them as parameters )
*/
console.log(numbers);
