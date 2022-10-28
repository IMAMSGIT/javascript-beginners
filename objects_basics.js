const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  isVisible: true,
  draw: function () {
    console.log("Draw");
  },
};
circle.draw();
// draw is  a function but a method , we should call because it is under a object
console.log(circle.location.x);
