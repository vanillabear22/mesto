// Функция для плавности
function toggleModalWindow(modalWindow) {
    modalWindow.classList.toggle('popup_opened');
  };
// Функции открытие/закрытие попапов
function openPopup(popupType) {
    popupType.classList.remove('popup_hidden');
    toggleModalWindow(popupType);
};
function closePopup(popupType) {
    popupType.classList.add('popup_hidden');
    inputImgUrl.value = '';
    inputPlaceName.value = '';
    toggleModalWindow(popupType);
};

// Вешаем слашателя на кнопкe ADD 
popupAddCard = document.querySelector('.popup_add-card');
const addButton = document.querySelector('.profile__add-button');
const closeButtonPopupAddCard = popupAddCard.querySelector('.popup__close-icon');
addButton.addEventListener('click', function() {
    openPopup(popupAddCard);
    });
closeButtonPopupAddCard.addEventListener('click', function() {
    closePopup(popupAddCard);
    });
// Вешаем слашателя на кнопкe EDIT 
popupEditProfile = document.querySelector('.popup_profile');
const editProfileButton = document.querySelector('.profile__edit-button');
const closeButtonPopupEditProfile = popupEditProfile.querySelector('.popup__close-icon');
editProfileButton.addEventListener('click', function() {
    openPopup(popupEditProfile);
    });
    closeButtonPopupEditProfile.addEventListener('click', function() {
    closePopup(popupEditProfile);
    });
// Вешаем слушаетля на зыкрытие попапа с большой фоткой
const popupPhoto = document.querySelector('.popup_photo');
const closeButtonPopupPhoto = popupPhoto.querySelector('.popup__close-icon');
closeButtonPopupPhoto.addEventListener('click', function() {
    closePopup(popupPhoto);
    });

// Функция сабмит Профиль
let inputName = document.querySelector('.popup__field_name');
let inputStatus = document.querySelector('.popup__field_status');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputStatus.value;
    closePopup (popupEditProfile);
    inputName.value = '';
    inputStatus.value = '';
}
    // вешаем слушатель на сабмит
const formPopup = document.querySelector('.popup__form_profile');
formPopup.addEventListener('submit', formSubmitHandler);


// LIKE 
function likeCard(evt) {
evt.target.classList.toggle('element__like_active');
};

// DELETE
function deleteCard(evt) {
evt.target.parentElement.remove();
};

// Сборка карточки 
let elementTeplate = document.querySelector('#element-template').content;
const elements = document.querySelector('.elements');
function getCardElement (name, link) {
const element = elementTeplate.cloneNode(true);
const likeButton = element.querySelector('.element__like');
const deleteButton = element.querySelector('.element__delete-icon');
let elementImage = element.querySelector('.element__image');
let elementPlaceName = element.querySelector('.element__place-name');
elementImage.src = link;
elementImage.alt = name;
elementPlaceName.textContent = name;

// Устанавливаем слушателеи
likeButton.addEventListener('click', likeCard);
deleteButton.addEventListener('click', deleteCard);
    // Функция и Слушатель для открытия попапа с фоткой
elementImage.addEventListener('click', function(evt) {
    imagePopupLink = popupPhoto.querySelector('.popup__image');
    imagePopupTitle = popupPhoto.querySelector('.popup__image-place-name');
    imagePopupLink.src = evt.target.src;
    imagePopupTitle.textContent = evt.target.alt;
    openPopup(popupPhoto);
    });
// Возвращаем элемент карточки
return element;
};


// Submit Добавление карточки
const formPopupPlace = document.querySelector('.popup__form_place');
const inputImgUrl = document.querySelector('.popup__field_img-link');
const inputPlaceName = document.querySelector('.popup__field_place-name');
const popupPlace = document.querySelector('.popup_place');

function addCardFromPopup (evt) {
    evt.preventDefault(); 
    elements.prepend(getCardElement(inputPlaceName.value, inputImgUrl.value)); 
    inputImgUrl.value = '';
    inputPlaceName.value = '';
    closePopup(popupAddCard);
}
formPopupPlace.addEventListener('submit', addCardFromPopup);  

// Автоматическое создание карточек из массива
initialCards.forEach(function(item) {
    elements.prepend(getCardElement(item.name, item.link));
});


