const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

let course = courses.find(function (course) {
  return course.name === "a";
});

console.log(course);

// here we have used find method to search within a object
// find method uses call back function
// if matches return the full object
// if not, we get undefined
let coursesIndex = courses.findIndex(function (course) {
  return course.name === "a";
});

console.log(coursesIndex);
// the findIndex method return the matched index
