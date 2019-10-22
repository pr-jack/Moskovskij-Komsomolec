'use strict';

(function () {
  var form  = document.querySelector('.modal-form');
  var email = document.querySelector('#user_email');
  var nikname = document.querySelector('#user-name');
  var errorMessage;

  var validateEmail = function () {
    var emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(emailRegExp.test(email) == false) {
      errorMessage = 'Введите валидный адрес электроноой почты'
      email.setCustomValidity(errorMessage);
      email.style.border = '2px solid red';
      console.log(emailRegExp);
    }
    return;
  }

  email.addEventListener('input', validateEmail);
})();
