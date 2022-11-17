let address = {
  street: 1,
  city: "xyz",
  code: 123,
};
function showAddress(paddress) {
  for (let key in paddress) console.log(key, paddress[key]);
}
showAddress(address);
