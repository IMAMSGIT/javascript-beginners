const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

let course = courses.find((course) => course.name === "a");

console.log(course);

//remove the function keyword
// remoce the paranthesis , if one parameter
// if single line statement in body, remove curly brace
