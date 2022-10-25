// operators used to create expression by varialbes and constants
// expression helps to build logic and algorithm

// ## JS operators
// 1) artihmetic 2) assignment 3) comparison 4)logical 5) bitwise

//-- 1) arthmetic are simple math operators
// except %,**(exponential), increment and decrement

//-- 2)assignment
// x++ and x+=1 are same, x=x+5 and x+=5 are same and so do
// -,*,/ and %

// -- 3)comparison
// Relational >,>=,<=,<
// Equality ===, !==

// Exceptional -- there is 2 type of equality
// ( === ) Strict Equality , it checks both the value and type are same or not
// ( == ) Lose Equality , it checks only the value and converts the type of the left side

// Ternary operator (comparison operator)
// let points = 110;
// let status = points > 100 ? "Trusted" : "Trial";
// console.log(status);

// 4) Logical
// AND(&&),OR(||),(!)

// Logical operator with non booleans (very important)
// we can use JS boolean expression out of boolean condition
// ex. false|| 'imam; // it'll print 'imam'
// Reason: there exissts some truthy and fals valuse in JS(not true and false)
// flasy(undefined, null, 0,false,'',NaN)
// anything not truthy is falsy
// false || 1|| 2 // prints 1,
// Reason : whenever finds a true, executes it and the rest ignored
// called short-circuiting
