var header__btn = document.getElementById("header__btn");
var header__content = document.getElementById("header__content");
var burger__close = document.getElementById("burger__close");

header__btn.onclick = function () {
  header__content.style.display = "block";
};

burger__close.onclick = function () {
  header__content.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == header__content) {
    header__content.style.display = "none";
  }
};
