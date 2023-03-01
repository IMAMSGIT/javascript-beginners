// very easy just to add get before function name, now it's getter
const person = {
  firstName: "Imam",
  lastName: "Hossain",

  // Gettter - access properties
  get fullName() {
    return `${person.firstName} ${person.lastName} `;
  },

  // setters- change or mutate them
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
person.fullName = "Another Imam";
console.log(person);
