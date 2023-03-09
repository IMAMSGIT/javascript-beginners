const movie = {
  title: "q",
  releaseYear: 2012,
  rating: 4.5,
  director: "b",
};
showProperties(movie);
function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") console.log(key, obj[key]);
}
