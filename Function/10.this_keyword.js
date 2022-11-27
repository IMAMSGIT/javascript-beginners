// method -> object itself
// just a regular function-> window object

// 1st rule
const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

// Adding another method to video object
video.stop = function () {
  console.log(this);
};

video.play();

const audio = {
  title: "c",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tags) {
      console.log(this.title, tags);
    }, this);
  },
};
// When we inside the callback function, if we used this
// because forEach is a regular function
// we couldn't get the desired result

audio.showTags();
// 2nd rule
function playVideo() {
  console.log(this);
}

playVideo();

// In constructor function
function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("b");
