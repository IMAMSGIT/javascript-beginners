// normal function uses camel notation
// constructor function uses pascal notation
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const circle1 = new Circle(2);
const circle2 = new Circle(4);

console.log(circle1.radius);
console.log(circle2.radius);

// 3 things happen here
//  new keyword creates an empty object
//  this points to this new object
//  new also return the object from the Circle function
