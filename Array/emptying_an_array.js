let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
// numbers = [];
// it works when no other refenrce occurs to original array

// Solution 2
numbers.length = 0;
// here both will change to same, great!!!

// Solution 3
// numbers.splice(0, numbers.length);

// Solution 4
// while (numbers.length > 0) numbers.pop();
// bad because need more looping to complete task

//  first 2 and then 1 is best
