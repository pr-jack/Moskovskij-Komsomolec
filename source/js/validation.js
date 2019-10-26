function CustomValidation() { }

var nikName = document.querySelector('#user-name');
var submit = document.querySelector('.modal-button');

CustomValidation.prototype = {

  invalidities: [],

  checkValidity: function(nikName) {

    var validity = nikName.validity;

    if (validity.patternMismatch) {
      this.addInvalidity('Никнейм должен состоять и латинских букв, цифр и символов "_" и ";"');
    }

    if (validity.rangeOverflow) {
      var max = getAttributeValue(input, 'max');
      this.addInvalidity('The maximum value should be ' + max);
    }

    if (validity.rangeUnderflow) {
      var min = getAttributeValue(input, 'min');
      this.addInvalidity('The minimum value should be ' + min);
    }
  },

  // Добавляем сообщение об ошибке в массив ошибок
  addInvalidity: function(message) {
    this.invalidities.push(message);
  },

  // Получаем общий текст сообщений об ошибках
  getInvalidities: function() {
    return this.invalidities.join('. \n');
  }
};

// Добавляем обработчик клика на кнопку отправки формы
submit.addEventListener('click', function(evt) {

  if (nikName.checkValidity() == false) {

    var inputCustomValidation = new CustomValidation();
    inputCustomValidation.checkValidity(nikName);
    var customValidityMessage = inputCustomValidation.getInvalidities();
    nikName.setCustomValidity(customValidityMessage);
  }
});
