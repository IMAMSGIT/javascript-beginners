function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const Circle1 = new Function(
  "radius",
  ` this.radius = radius;
this.draw = function () {
  console.log("Draw");
};`
);

// when we create a function
// internally it represents like this

const another = new Circle(1);
