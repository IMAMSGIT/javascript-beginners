const circle = {
  radius: 1,
  draw() {
    console.log("Draw");
  },
};

for (const firstItems in circle) {
  console.log(firstItems, circle[firstItems]);
}

//the simplest  way to enumerate an object is for in loop

//for of loop won't work because only works for iterables like array and maps
// also object is not iterable

// But we can use it with ...
// we can also use valuse method of Object to get value
for (const key of Object.keys(circle)) {
  console.log(key);
}

// it return the properties of an object into a string array
// when we create an empty object
// like this const x = { value:1}
// it translates into const x =new Object();
// which invokes function Object(){} this
// constructor function

for (const entry of Object.entries(circle)) {
  console.log(entry);
}
// also can use , entries method
// it return each key , value pair as an array

//to check if any property exist in the object

if ("dra" in circle) {
  console.log("yes");
}

if ("draw" in circle) {
  console.log("yes");
}
