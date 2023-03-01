const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

const anotherOne = Object.assign({}, circle);
console.log(anotherOne);

// the first param of assign methond does not
// need to be empty ex:::::
// Object.assign(
//   {
//     color: "yellow",
//   },
//   circle
// );

// but there is another easy way to clone
const another = { ...circle }; // spread  operator
console.log(another);
