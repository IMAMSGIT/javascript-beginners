// we can't numbers =[] to others ,
//  but we can add elemets or remove elments
const numbers = [3, 4];

//End
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

//Middle
numbers.splice(2, 0, "a", "b");
// position, how many elements want to delete, then which elelments want to add
console.log(numbers);
