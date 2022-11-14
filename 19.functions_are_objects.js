function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

// const Circle1 = new Function(
//   "radius",
//   ` this.radius = radius;
// this.draw = function () {
//   console.log("Draw");
// };`
// );

// ** proof of functions are objects

// when we create a function
// internally it represents like this
Circle.call({}, 1);
// exactly same as const another = new Circle(1);
// if we want to use apply method we have to
// supply prameters like [1], not just one in the above
