// --------1st rule
// If we call 'this' from a method of an Object
// it calls the object itself
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

video.play();

// ---------- 2nd rule
// If we call 'this' from a general function
// it calls the window object
function playVideo() {
  console.log(this);
}
playVideo();

// ----------3rd rule
// If we call 'this' from a constructor function
// it points to  the new v object
function Video(title) {
  this.title = title;
  console.log(this);
}
var v = new Video("a");

// 4th rule
// If we use 'this' inside of a callback funtion in any method
// 'this' will point to global object
// Using forEach mehod we can supply 2 parameters, the second parameter is the target object which is attached to
// inside the callback function
const audio = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};
