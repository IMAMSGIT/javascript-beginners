// Continuin from the last topi 'the this keyword'

// apply method and passing an object
// it no object passed, 'this' will point to window
// But the key difffernec is
// call method method other parameters is passed as normal
// but in apply , it is passed as an array

function playVideo(a, b) {
  console.log(this);
}
playVideo.call({ name: "Imam" }, 1, 3);
playVideo.apply({ name: "Imam" }, [1, 2]);

// bind method
// but the method does not point to he playVideo  function
// it returns a new function and sets to point
// this new function

playVideo.bind({ name: "Imam" })();

//  1st solution of the solution is bind method
const video = {
  title: "a",
  tags: ["a", "b", "c", "d"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};
video.showTags();

// The modern solution
// is to use callback function
// No hassle of using bind method
// arrow functions use this as default
const audio = {
  title: "a",
  tags: ["a", "b", "c", "d"],
  showTags() {
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};
video.showTags();
