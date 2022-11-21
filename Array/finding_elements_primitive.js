// finding elements for primitive data types
let numbers = [1, 2, 3, 1, 4];
console.log(numbers.indexOf(1, 2)); // second parameter is where to start searching
console.log(numbers.lastIndexOf(1));

// to check one elements exist in the array
console.log(numbers.indexOf(1) !== -1);

// we have better way now
console.log(numbers.includes(1));
