// to solve the this problem

// 1st solution but don't use it
const video = {
  title: "c",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tags) {
      console.log(self.title, tags);
    }, this);
  },
};

video.showTags();

// 2nd Solution
function playVideo() {
  roll: 2;
  console.log(this);
}

playVideo.call({ name: "Imam", roll: 2 }); // call ->created a new object
playVideo.apply({ name: "abc" }); // apply ->created a new object, second parameter needs to passed as an array
playVideo.bind({ name: "def", roll: 55 })(); // return a function

// 3rd solution

const videoAnother = {
  title: "c",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tags) => {
      console.log(this.title, tags);
    });
  },
};

// we get same result , because arrow function inherits the object it is in
videoAnother.showTags();
