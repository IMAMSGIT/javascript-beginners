const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second];
// we can also add in the middle or last by spread operator
// const combined = [...first, 'a',...second,'b'];
const copy = [...combined]; // to cpoy the shole aray that we do in slice method
