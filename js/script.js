var image = document.getElementById("image");
var text = document.getElementById("text");
var title = document.getElementById("title");
var randomizeBtn = document.getElementById("randomizeBtn");
var previousRandom;

randomizeBtn.addEventListener("click", function () {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var random = Math.floor(Math.random() * data.length);
      while (random === previousRandom) {
        random = Math.floor(Math.random() * data.length);
      }
      previousRandom = random;
      image.src = data[random].image;
      text.innerHTML = data[random].text;
      title.innerHTML = data[random].title;
      text.className = "random-image-text";
    });
});
