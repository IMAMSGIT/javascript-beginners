const oneLocation = showAddress(1, "xyz", 12);
console.log(oneLocation);

// factory funxction
function showAddress(street, city, zipcode) {
  return {
    street,
    city,
    zipcode,
  };
}

// constructor function
let address = new CreateAddress(12, "Leister", 1212);
console.log(address);
function CreateAddress(street, city, zipcode) {
  this.street = street;
  this.city = city;
  this.zipcode = zipcode;
}
