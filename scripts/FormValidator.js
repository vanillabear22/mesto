  const config = {
    formProfile: '.popup__form_profile',
    formPlace: '.popup__form_place',
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  };

 class FormValidator {
   constructor(object, formSelector) {
    this._formSelector = formSelector;
    this._formElement = document.querySelector(formSelector);
    this._errorClass = object.errorClass;
    this._inputErrorClass = object.inputErrorClass;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
   }

    _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

    _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
    };

    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    };
   
    _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => !inputElement.validity.valid);
    };

    _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.setAttribute('disabled', 0);
    } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    } 
    }

    _setEventListeners() {
      
      const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
      
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input',  () => {
          this._checkInputValidity(inputElement);
          this._toggleButtonState (inputList, buttonElement);
        });
      });

      this._toggleButtonState(inputList, buttonElement); 
    };

    enableValidation = () => {
      this._setEventListeners();
    };

 }

 export {config, FormValidator};