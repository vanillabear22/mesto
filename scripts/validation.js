


// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add('popup__input_type_error');
  // 2. Установите errorMessage в качестве значения textContent для formError.
  errorElement.textContent = errorMessage;
  // 3. Добавьте formError класс form__input-error_active. Пока не знаю зачем, а гланое ...
  errorElement.classList.add('popup__error_visible');
};
// Функция, которая удаляет класс с ошибкой


const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__error_visible');
  };

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};
// Функция установки слушателей на все поля
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__submit-button');

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState (inputList, buttonElement);
    });
  });
};
// Проверка валидации всех полей
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
  })
}; 
// Функция вкдючения и откдючения кнопки
const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add('popup__submit-button_disabled');
  buttonElement.setAttribute('disabled', 0);
} else {
  buttonElement.classList.remove('popup__submit-button_disabled');
  buttonElement.removeAttribute('disabled');
} 
}

// Функция включения валидации
const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(`${object.formSelector}`));
  console.log(formList);
  formList.forEach((formElement) => {
  

    setEventListeners(formElement);
}); 
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}); 


