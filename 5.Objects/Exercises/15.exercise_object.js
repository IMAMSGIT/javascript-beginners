const address = {
  street: "a",
  city: "b",
  zipcode: 1234,
};
function showAddress(address) {
  for (key in address) console.log(`${key}: ${address[key]}`);
}
showAddress(address);
