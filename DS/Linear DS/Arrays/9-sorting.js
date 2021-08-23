const numbers = [2, 3, 1];
const strings = ['b', 'c', 'a'];
const courses = [
  { id: 1, name: 'React.js' },
  { id: 2, name: 'Node.js' },
];

// for numbers and strings in array
numbers.sort();
console.log(numbers);

strings.sort();
console.log(strings);

// for objects (sorting by name property)
courses.sort(function (a, b) {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);
