const numbers = [5, 6, 7, 8];

const out = move(numbers, 1, 1);

console.log(out);

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.log("Invalid offset");
    return;
  }
  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(index + offset, 0, element);
  return output;
}

// splice method starts with the index where it starts including the element
// 2nd param as how many to include including the mentioned index
