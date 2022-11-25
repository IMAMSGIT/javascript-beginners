// Function declaration
function walk() {
  console.log("Walk");
}

// function can be assigned to a variable
//called Function Expression
// if Function has no name, called anonymous function expression
// otherwise named function expression
let run = function () {
  console.log("Runnnn");
};

// To call the anonymous function
// just like function call
run();

// also we can the run to another var on const
let move = run();
