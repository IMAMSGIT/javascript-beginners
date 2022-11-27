// check how many occurences of elements in the array
// also if we pass null, boolean instead of array
// ex  : Input : ([1,2,3,4,1],1 ) Output:2
try {
  const numbers = [1, 2, 3, 4, 1];
  console.log(countOccurences(null, 4));
} catch (e) {
  console.log(e.message);
}
function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error("Invalid Array");
  return array.reduce((accumulator, current) => {
    const occurence = current === searchElement ? 1 : 0;
    return accumulator + occurence;
  }, 0);
}
