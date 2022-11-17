// see documentation on the internet
// just one example to
// generate random numer between two values
function getRandomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
console.log(getRandomNumber(0, 9));
console.log(getRandomNumber(0, 9));
