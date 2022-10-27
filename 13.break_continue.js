let i = 0;
while (i <= 10) {
  if (i === 5) break;
  console.log(i);
  i++;
}
console.log("------------------------------");
let j = 0;
while (j <= 10) {
  if (j % 3 === 0) {
    j++;
    continue;
  }
  console.log(j);
  j++;
}
