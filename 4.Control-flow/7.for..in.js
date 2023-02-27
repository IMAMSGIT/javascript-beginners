// Always use it to iterate over an object , not on array
const person = {
  name: "imam",
  age: 40,
};

console.log(person["name"]);
// To print both key and value
for (const key in person) {
  console.log(key, person[key]);
}

// ES feature
// To print keys
// Returns as an array
console.log(Object.keys(person));

const fruits = "Banana";
console.log(Object.keys(fruits));

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
console.log(Object.keys(fruits));
