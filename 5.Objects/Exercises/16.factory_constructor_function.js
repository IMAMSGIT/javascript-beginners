// console.log(showAddress("a", "b", 1234));

// object creation using factory function
// function showAddress(city, street, zipcode) {
//   return { city, street, zipcode };
// }

function ShowAddress(city, street, zipcode) {
  this.city = city;
  this.street = street;
  this.zipcode = zipcode;
}
const address = new ShowAddress("a", "b", 1234);
console.log(address);
