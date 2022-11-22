const numbers = [1, 2, 3];

//Using for of loop
for (let number of numbers) console.log(number);

// Using forEach call back function
numbers.forEach(function (number) {
  console.log(number);
});

// shorter version of the above code
// numbers.forEach((number) => console.log(number));

// also to print ndex along with  the value
// numbers.forEach((number, index) => console.log(index, number));
