const numbers = [1, 2, 3, 4];

//End
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// Middle
const middle = numbers.splice(0, 1); //starting index to delete & how many to delete
console.log(numbers);
console.log(middle);
