const numbers = [1, 2, 3, -1];

const items = numbers.map((n) => "<li>" + n + "</li>");

console.log(items);

const html = items.join("");

console.log(html);

// To map into an object

const mapppingIntoObject = numbers.map((n) => ({
  value: n, // for object return we jhave to use (), we can't omit that
}));

console.log(mapppingIntoObject);

// we can write the code very easily by chaining two methods -map,join
const chainingMapJoin = numbers
  .filter((n) => n >= 0)
  .map((n) => ({ value: n }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);
console.log(chainingMapJoin);
