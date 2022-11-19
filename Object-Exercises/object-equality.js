let address1 = new CreateAddress("a", "b", "c");
let address2 = new CreateAddress("a", "b", "c");
let address3 = address2;

console.log(areSame(address1, address2));
console.log(areEqual(address1, address2));
console.log(areSame(address2, address3));

function CreateAddress(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}

function areSame(add1, add2) {
  return add1 === add2;
}

function areEqual(addr1, addr2) {
  return (
    addr1.street === addr2.street &&
    addr1.city === addr2.city &&
    addr1.zipcode === addr2.zipcode
  );
}
