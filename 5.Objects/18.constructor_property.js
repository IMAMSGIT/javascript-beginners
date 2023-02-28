function createCircle(radius) {
  return {
    radius, // same as  radius :radius
    draw: function () {
      console.log("Draw");
    },
  };
}

const circle = createCircle(1);

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}

const another = new Circle(2);

// every object has a constructor property
// that refernces the function we used to create that object
