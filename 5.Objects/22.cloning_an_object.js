const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};
// const another = {};

// for (const key in circle) {
//   another[key] = circle[key];
// }

// ****** this is a old method to clone an object
//  --------the new method is very easy

// const anotherOne = Object.assign({}, circle);
// console.log(anotherOne);

// the first param of assign methond does not
//need to be empty ex:::::
// Object.assign(
//   {
//     color: "yellow",
//   },
//   circle
// );

// *but there is another easy way to clone
const another = { ...circle }; // spreed operator
console.log(another);
