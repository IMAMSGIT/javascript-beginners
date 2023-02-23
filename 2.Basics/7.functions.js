// it is also reference type

function saying() {
  console.log("Hi there");
}

saying();

function calling(firstName, lastName) {
  console.log("Hi " + firstName + " " + lastName);
}

calling("Imam");

// if we don't pass any argument of the parameter
// then it will be undefined
// because by default all are undefined in JS
