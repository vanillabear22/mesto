const closeEsc = (evt) => {
    if (evt.key === "Escape") {
        closePopup(popupPhoto);
        closePopup(popupAddCard);
        closePopup(popupEditProfile);
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
    });
    closeButtonPopupEditProfile.addEventListener('click', function() {
    closePopup(popupEditProfile);
    inputName.value= '';
    inputStatus.value= '';
    });
// Вешаем слушаетля на зыкрытие попапа с большой фоткой
const popupPhoto = document.querySelector('.popup_photo');
const closeButtonPopupPhoto = popupPhoto.querySelector('.popup__close-icon');
closeButtonPopupPhoto.addEventListener('click', function() {
    closePopup(popupPhoto);
    });

// Функция сабмит Профиль
const inputName = document.querySelector('.popup__input_name');
const inputStatus = document.querySelector('.popup__input_status');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
inputName.value=profileName.textContent;
inputStatus.value=profileStatus.textContent;
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputStatus.value;
    closePopup (popupEditProfile);
    
   
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
const elementTemplate = document.querySelector('#element-template').content;
const elements = document.querySelector('.elements');
function getCardElement (name, link) {
const element = elementTemplate.cloneNode(true);
const likeButton = element.querySelector('.element__like');
const deleteButton = element.querySelector('.element__delete-icon');
const elementImage = element.querySelector('.element__image');
const elementPlaceName = element.querySelector('.element__place-name');
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
// renderCard
const renderCard = (data1, data2, container) => {
    container.append(getCardElement(data1, data2));
  };
// Тогда я пишу новую функцию для добавления новых карточек, потомучто новые должны быть в начале
const renderNewCard = (data1, data2, container) => {
    container.prepend(getCardElement(data1, data2));
  };
// Submit Добавление карточки
const formPopupPlace = document.querySelector('.popup__form_place');
const inputImgUrl = document.querySelector('.popup__input_img-link');
const inputPlaceName = document.querySelector('.popup__input_place-name');


function addCardFromPopup (evt) {
    evt.preventDefault(); 
    renderNewCard(inputPlaceName.value, inputImgUrl.value, elements);
    inputImgUrl.value = '';
    inputPlaceName.value = '';
    closePopup(popupAddCard);
}
formPopupPlace.addEventListener('submit', addCardFromPopup);  

// Автоматическое создание карточек из массива
initialCards.forEach(function(item) {
    renderCard(item.name, item.link, elements);
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