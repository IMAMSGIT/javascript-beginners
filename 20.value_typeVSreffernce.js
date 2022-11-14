// in JS
// Primitive or value types are ----
// Number , String ,Boolean,Symbol,undefined,null

// Reference types are ----
// Object Function Array

let x = 2;
let y = x;
x = 3;

// in prmitive type , only the valuse gets copied , not memory location
// output is x=3, y=2

let p = {
  value: 10,
};
let q = p;
p.value = 20; // changing the value property of p

// here unlike primitive types , both p and q changes
// even we changed the p later on
// at first , p's value referred to a different location
//when we copy p to q, both p and q , points to the location
let num = 2;
function a(number) {
  number++;
}
a(num);
console.log(num);
