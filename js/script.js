var image = document.getElementById("image");
var text = document.getElementById("text");
var randomizeBtn = document.getElementById("randomizeBtn");

// get data from data.json
// on click of randomize button, randomize the data
// if the data is same as the previous data, randomize again
// update the image and text

randomizeBtn.addEventListener("click", function () {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var random = Math.floor(Math.random() * data.length);
      image.src = data[random].image;
      text.innerHTML = data[random].text;
    });
});
