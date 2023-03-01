const first = [3, 2, 1];
const second = [4, 9, 8];
const combined = first.concat(second);
// const revert = second.concat(first);
const slice = combined.slice(2, 5); // copy 5th index -1 starting from 2

const third = [{ id: 1 }];
const fourth = [12, 34];
const concatwithObject = third.concat(fourth);

third[0].id = 2; // change the actual value from the third array object
console.log(concatwithObject);
