'use strict';

(function () {
  var form  = document.querySelector('.modal-form')[0];
  var email = document.querySelector('#user-email');
  var nikname = document.querySelector('#user-name');
  var error = document.querySelector('.error');

  email.addEventListener('input', function (evt) {
    if (email.validity.valid) {
      error.innerHTML = "";
      error.className = "error";
    }
  }, false);

  form.addEventListener("submit", function (evt) {
    if (!email.validity.valid) {
      error.innerHTML = "I expect an e-mail, darling!";
      error.className = "error active";
      event.preventDefault();
    }
  }, false);
})();
