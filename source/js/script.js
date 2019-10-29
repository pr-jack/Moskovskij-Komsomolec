'use strict';

(function () {

  var link = document.querySelector(".main-button");
  var popup = document.querySelector(".modal-registration");
  var close = document.querySelector(".modal-close");
  var form = document.querySelector(".modal-form");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    form.reset();
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
  	  evt.preventDefault();
  	  popup.classList.remove("modal-show");
      form.reset();
  	}
  });
})();
