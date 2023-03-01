//  if we decalre somrthign as const or let
// it is local to that scope

function start() {
  const message = "hi";
}
// console.log(message); // error

function start1() {
  if (true) {
    const another = "bye";
  }
  console.log(another);
}

// start1(); //error

const color = "red";
function showColor() {
  const color = "green";
  console.log(color);
}

showColor();

// local variable takes precedence over global
// always avoid declaring global variables
