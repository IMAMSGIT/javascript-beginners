function back(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}

console.log(back(10000, 3.5, 5));
// if we ant to set default parameter , it will be like this
// function back(principal, rate = 3.4, years = 3) {
//   return ((principal * rate) / 100) * years;
// }

// if you declare default parameter in the middle
// the rest also must be declared ,
//  otherwise would be error
