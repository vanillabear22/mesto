// Функция закрытия открытого попапа
const closeEsc = (evt) => {
    if (evt.key === "Escape") {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
};

// Функции открытие/закрытие попапов
function openPopup(popupType) {
    popupType.classList.add('popup_opened');
    document.addEventListener('keyup', closeEsc);
};
function closePopup(popupType) {
    
    popupType.classList.remove('popup_opened');
    document.removeEventListener('keyup', closeEsc);
    
};



// Вешаем слашателя на кнопкe ADD 
const popupAddCard = document.querySelector('.popup_add-card');
const addButton = document.querySelector('.profile__add-button');
const closeButtonPopupAddCard = popupAddCard.querySelector('.popup__close-icon');
addButton.addEventListener('click', function() {
    openPopup(popupAddCard);
    
    });
closeButtonPopupAddCard.addEventListener('click', function() {
    closePopup(popupAddCard);
    inputPlaceName.value = '';
    inputImgUrl.value = '';
    });
// Вешаем слашателя на кнопкe EDIT 
const popupEditProfile = document.querySelector('.popup_profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeButtonPopupEditProfile = popupEditProfile.querySelector('.popup__close-icon');
editProfileButton.addEventListener('click', function() {
    openPopup(popupEditProfile);
    inputName.value= profileName.textContent;
    inputStatus.value= profileStatus.textContent;
    });
    closeButtonPopupEditProfile.addEventListener('click', function() {
    closePopup(popupEditProfile);
    });
// Вешаем слушаетля на зыкрытие попапа с большой фоткой
const popupPhoto = document.querySelector('.popup_photo');
const imagePopupLink = popupPhoto.querySelector('.popup__image');
const imagePopupTitle = popupPhoto.querySelector('.popup__image-place-name');
const closeButtonPopupPhoto = popupPhoto.querySelector('.popup__close-icon');
closeButtonPopupPhoto.addEventListener('click', function() {
    closePopup(popupPhoto);
    });

// Функция сабмит Профиль
const inputName = document.querySelector('.popup__input_name');
const inputStatus = document.querySelector('.popup__input_status');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputStatus.value;
    closePopup (popupEditProfile);
    
   
}
    // вешаем слушатель на сабмит профиля
const formPopup = document.querySelector('.popup__form_profile');
formPopup.addEventListener('submit', formSubmitHandler);


// СОЗДАНИЕ КАРТОЧЕК

// функция для добавления новых карточек
const renderNewCard = (name, link) => {
    const card = new Card(name, link, '#element-template');
    const cardElement = card.generateCard();
    document.querySelector('.elements').prepend(cardElement);
  };
// Submit Добавление карточки
const formPopupPlace = document.querySelector('.popup__form_place');
const inputImgUrl = document.querySelector('.popup__input_img-link');
const inputPlaceName = document.querySelector('.popup__input_place-name');


function addCardFromPopup (evt) {
    evt.preventDefault(); 
    renderNewCard(inputPlaceName.value, inputImgUrl.value);
    inputImgUrl.value = '';
    inputPlaceName.value = '';
    closePopup(popupAddCard);
}
formPopupPlace.addEventListener('submit', addCardFromPopup);  

// Автоматическое создание карточек из массива
initialCards.forEach(function(item) {
    const card = new Card(item.name, item.link, '#element-template');
	const cardElement = card.generateCard();
	document.querySelector('.elements').append(cardElement);
});



// Закрытие попапов по клику
const popupAll = document.querySelectorAll('.popup');
popupAll.forEach(function(popupType) {
    popupType.addEventListener('click', function(evt){
        if (evt.target === popupType) {
            closePopup(popupType);
        }
    });
});


//// VALIDATION

const formProfileValidator = new FormValidator(config, config.formProfile);
formProfileValidator.enableValidation()
const formPlaceValidator = new FormValidator(config, config.formPlace);
formPlaceValidator.enableValidation()

