'use strict';

(function () {
  // Валидация Никнейма

  var MAX_NIKAME_LENGTH = 40;
  var MIN_NIKAME_LENGTH = 3;
  var nikName = document.querySelector('#user-name');


  var validateNikName = function () {
    var nikNameValue = nikName.value;
    var nikNameFirstSimbol = nikNameValue.charAt(0);
    var errorMessage;
    var legalSimbol = /[/w/d;]/;
    var legalFirstSimbol = /[A-Za-z]/;

    if (!nikNameFirstSimbol.match(legalFirstSimbol)) {
      errorMessage = 'Никнейм может начинаться только с буквы';
    } else if (nikNameValue.length < MIN_NIKAME_LENGTH) {
      errorMessage = 'Никнейм не может быть меньше чем 3 символа';
    } else if (nikNameValue.length > MAX_NIKAME_LENGTH) {
      errorMessage = 'Никнейм не может быть больше чем 40 символов';
    } else if (!nikNameValue.match(legalSimbol)) {
      errorMessage = 'Никнейм может содержать только латинские буквы и символы "_" и ";"';
    }

    if (errorMessage) {
      nikName.setCustomValidity(errorMessage);
      nikName.style.border = '1px solid #9F2B11';
    } else {
      nikName.style.border = '1px solid #DDDDDD';
      nikName.setCustomValidity('');
    }
  };

  nikName.addEventListener('input', validateNikName);
})();
