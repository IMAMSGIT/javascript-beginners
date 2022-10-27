// there are 5 types of loops
// 1.for
// 2.while
// 3.do..while
// 4.for..in
// 5.for...of

for (let i = 0; i < 5; ++i) {
  console.log("Hello world", i);
}

// in for loop, declared variable i is oly availabe in the scope
// but in while loopit isn't
let i = 3;
while (i <= 8) {
  console.log(i);
  i++;
}

//do..while executes at least one time evenif the condition is false
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 5);

// for ..in and for..of loops are used to iterate
//over an object property or an array

// #### for...in
//----In Objects-------
const me = {
  name: "Imam",
  age: 30,
};
// my becomes alias to me ooject's key and me[my] as value
for (let my in me) {
  console.log(my, me[my]);
}

const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);

// for..in
//-----in Arrays-------
const colors = ["red", "blue", "greee"];
for (const color in colors) {
  console.log(color, colors[color]);
}
// color becomes alias of the index
// to get the value array_name[alias]

// for of
// the main benefit is we don't have to
// access every element of an array/object
// it simple does it
for (const color of colors) {
  console.log(color);
}
