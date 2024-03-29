// A factory function can be defined as a function
// that creates an object and returns it.
// Also,When a function creates and returns
// a new object, it is called a factory function
// objective is to creat objects not by hard coding
// by factory function, we can create many function simply
function createCircle(radius) {
  return {
    radius, // same as  radius :radius
    draw() {
      console.log("Draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(3);
console.log(circle2);
