const numbers = [2, 3, 1];
numbers.sort();
console.log(numbers);

// Reverse
numbers.reverse();
console.log(numbers);

// Useful for numbers and strings to sort
// For objects, we have to use different approach, check below
const courses = [
  {
    id: 1,
    name: "node.js",
  },
  { id: 2, name: "Op" },
];
courses.sort(function (a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  else return 0;
});

console.log(courses);

// To know, which character comes first
// check ASCII table
// also for case sensitivity
