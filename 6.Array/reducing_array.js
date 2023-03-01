const numbers = [1, 2, 3, 4];

// Easy one
// let sum = 0;
// for (let n of numbers) sum += n;
// console.log(sum);

// a =0,c=1, next step
// a =1, c=2
// a=3, c=3
// a=6 c=4

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// last zero  prameter for the accumulator to set to zero
// if we don;t supply it first loop won't be done, but not problem
console.log(sum);
