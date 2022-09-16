window.addEventListener("load", function () {
  var list = document.getElementById("list");
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var html = "";
      data.forEach(function (item) {
        html += '<div class="random-image-list mar-t">';
        html += "<img src='" + item.image + "' />";
        html += '<p class="random-image-text">' + item.text + "</p>";
        html += "</div>";
      });
      list.innerHTML = html;
    });
});
