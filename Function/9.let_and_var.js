function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      var color = "red";
    }
  }

  console.log(color); // give error if used let

  // We can't access i even removing curly braces
  // as it is declared as  let

  // let -> only available in the block
  // var-> avaialble in the whole function
}
start();

// also when we decalre something using var , it attaches with the buil in window object
// regard as bad
// when we declare function, also it got attached with window pbject
