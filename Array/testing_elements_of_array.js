const numbers = [1, 2, -1, 3];
const allPositve = numbers.every(function (value) {
  return value >= 0;
});

const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

// every()check if every elements check the criteria
// some()check if at least elements check the criteria
