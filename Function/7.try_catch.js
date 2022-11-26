const person = {
  firstName: "Imam",
  lastName: "Hossain",
  set fullName(value) {
    // When we create an error object, it is a basic Error object
    // but after throwing it, called exception
    // const e = new Error();
    // throw e;

    if (typeof value !== "string") throw new Error("Value is not a string");
    const parts = value.split(" ");
    if (parts.length != 2) throw new Error("Enter first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = "";
} catch (e) {
  alert(e);
}
console.log(person);
