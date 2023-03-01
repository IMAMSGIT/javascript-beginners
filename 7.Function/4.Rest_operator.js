// function sum(...args) {
// console.log(args); // turn the parameter into an  array
//   return args.reduce((a, b) => a + b); // to get sum of the elements
// }
// console.log(sum(1, 2, 3, 4));

//Different example
function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}
console.log(sum(0.1, 20, 30));

// rest parameter should be at last, otherwise error occurs
