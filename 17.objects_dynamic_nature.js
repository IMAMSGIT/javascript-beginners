const laptop = {
  name: "hp",
};

//we can add new property. though it's constant
laptop.color = "black";
//we can add new method. though it's constant
laptop.button = function () {};
// we can delete  property. though it's constant
delete laptop.color;
//we can delete  property. though it's constant
delete laptop.button;

console.log(laptop);

// so const before the object here means we can create laptop object again
// but add and delete property and methods
