const first = [1, 2, 3];
const second = [4, 5, 6];

// Combine two arrays
// i) using concat method
// const combined = first.concat(second);
// console.log(combined);

// ii) using spread operator
const combined = [...first, ...second];
console.log(combined);

// Slice one array into two parts
// i) pass 0 base index for the start and end
const sliced = combined.slice(2, 4);
console.log(sliced);

// ii) by exclude end index (get all the elements in the original array starting from the given index)
// const sliced = combined.slice(2);
// console.log(sliced);

// iii) by exclude the starting index (get a copy of a original array)

// (a) using slice() without any parameter
// const sliced = combined.slice();
// console.log(sliced);

// (b) using spread operator
const copy = [...combined];
console.log(copy);
