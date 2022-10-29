// objective is to creat objects not by hard coding
// by factory function, we can create many function simply
function createCircle(radius) {
  return {
    radius, // same as just radius
    draw() {
      console.log("Draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);
const circle2 = createCircle(1);
