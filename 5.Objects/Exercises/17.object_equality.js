function ShowAddress(city, street, zipcode) {
  this.city = city;
  this.street = street;
  this.zipcode = zipcode;
}
const address1 = new ShowAddress("a", "b", 1234);
const address2 = new ShowAddress("a", "b", 1234);

function areEqual(address1, address2) {
  return (
    address1.city === address2.city &&
    address1.street === address2.street &&
    address1.zipcode === address2.zipcode
  );
}

function areSame(address1, address2) {
  return address1 === address2;
}

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));
