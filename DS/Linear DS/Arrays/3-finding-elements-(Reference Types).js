const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
];

// find course, if exits it will return the course otherwisw undefined
const course = courses.find(function (course) {
  return course.name === 'a';
});

console.log(course);

// find index of a course, if exits it will return the index of the course otherwise -1

const courseIndex = courses.findIndex(function (course) {
  return course.name === 'c';
});

console.log(courseIndex);
