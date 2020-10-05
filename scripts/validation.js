// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, object) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(object.inputErrorClass);
  // 2. Установите errorMessage в качестве значения textContent для formError.
  errorElement.textContent = errorMessage;
  // 3. Добавьте formError класс form__input-error_active. Пока не знаю зачем, а гланое ...
  errorElement.classList.add(object.errorClass);
};
// Функция, которая удаляет класс с ошибкой


const hideInputError = (formElement, inputElement, object) => {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(object.errorClass);
  };

// Функция, которая проверяет валидность поля
const checkInputValidity = (formElement, inputElement, object) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, object);
  } else {
    hideInputError(formElement, inputElement, object);
  }
};
// Функция установки слушателей на все поля
const setEventListeners = (formElement, object) => {
  const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
  const buttonElement = formElement.querySelector(object.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, object);
      toggleButtonState (inputList, buttonElement, object);
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
const toggleButtonState = (inputList, buttonElement, object) => {
  if (hasInvalidInput(inputList)) {
  buttonElement.classList.add(object.inactiveButtonClass);
  buttonElement.setAttribute('disabled', 0);
} else {
  buttonElement.classList.remove(object.inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
} 
}


  
  // Функция включения валидации
  const enableValidation = (object) => {
    const formList = Array.from(document.querySelectorAll(object.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, object);
  }); 

  }
  
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }); 
  
   