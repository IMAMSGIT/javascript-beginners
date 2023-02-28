let i = 0;
while (i < 10) {
  if (i === 5) break;
  console.log(i);
  i++;
}
console.log("--------");

let j = 0;
while (j < 10) {
  if (j % 2 == 0) {
    j++;
    continue; // when it matches, loops go up
  }
  console.log(j);
  j++;
}
// 1 3 5 7 9
