


/*переменные для попапа с картинкой */

let imagePopupTemplate = document.querySelector('#image-popup-template').content.cloneNode(true);
let imagePopupLink = imagePopupTemplate.querySelector('.popup__image');
let imagePopupTitle = imagePopupTemplate.querySelector('.popup__image-place-name');
const body = document.querySelector('.body');

/*   Добавление карточек при старте */
const initialCards = [
    {
        name: 'Берлин',
        link: './images/berlin.jpg'
    },
    {
        name: 'Будапешт',
        link: './images/budapest.jpg'
    },
    {
        name: 'Дрезден',
        link: './images/dresden.jpg'
    },
    {
        name: 'Прага',
        link: './images/praha.jpg'
    },
    {
        name: 'Вена',
        link: './images/vienna.jpg'
    },
    {
        name: 'Алтай',
        link: './images/altai.jpg'
    }
];
let elementTeplate = document.querySelector('#element-template').content;
let elements = document.querySelector('.elements');
let element = elementTeplate.cloneNode(true);



function addCardsWithStart() {

    initialCards.forEach(function(item) {
    const element = elementTeplate.cloneNode(true);
    let elementImage = element.querySelector('.element__image');
    let elementPlaceName = element.querySelector('.element__place-name');
    
    elementImage.src = item.link;
    elementImage.alt = item.name;
    elementPlaceName.textContent = item.name;
    
    /* LIKE */
    const elementlike = element.querySelector('.element__like');
    elementlike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
    });

    /* DELETE */
    let deleteButton = element.querySelector('.element__delete-icon');

    deleteButton.addEventListener('click', function (evt) {
    let eventTarget = evt.target;
    eventTarget.parentElement.remove();
    });

    /* попап с картинкой слушатель */
    elementImage.addEventListener('click', function(evt) {
        imagePopupLink.src = evt.target.src;
        imagePopupTitle.textContent = evt.target.alt;
        body.append(imagePopupTemplate);
        document.querySelector('.popup__image-container').querySelector('.popup__close-icon').addEventListener('click', function(evt) {
            
            let eventTarget = evt.target;
            eventTarget.parentElement.parentElement.parentElement.remove();
            
        });
        
    });


    elements.append(element); 
    
    
});
}
addCardsWithStart();

/* POPUP place */

const addButton = document.querySelector('.profile__add-button');
const popupPlace = document.querySelector('.popup_place');
const inputImgUrl = document.querySelector('.popup__field_img-link');
const inputPlaceName = document.querySelector('.popup__field_place-name');
const popupCloseButtonPlace = popupPlace.querySelector('.popup__close-icon');
const formPopupPlace = document.querySelector('.popup__form_place');

function openPopupPlace () {
    popupPlace.classList.remove('popup_hidden');
}
function closePopupPlace () {
    popupPlace.classList.add('popup_hidden');
}

function addCardFromPopup (evt) {
    evt.preventDefault(); 

    const elements = document.querySelector('.elements');
    const element = elementTeplate.cloneNode(true);
    let elementImage = element.querySelector('.element__image');
    let elementPlaceName = element.querySelector('.element__place-name');

    elementImage.src = inputImgUrl.value;
    elementImage.alt = inputPlaceName.value;
    elementPlaceName.textContent = inputPlaceName.value;
    /* LIKE */
    const elementlike = element.querySelector('.element__like');
    elementlike.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
    });

    /* DELETE */
    let deleteButton = element.querySelector('.element__delete-icon');

    deleteButton.addEventListener('click', function (evt) {
    let eventTarget = evt.target;
    eventTarget.parentElement.remove();
    });


    /* попап с картинкой слушатель */
    elementImage.addEventListener('click', function(evt) {
    imagePopupLink.src = evt.target.src;
    imagePopupTitle.textContent = evt.target.alt;
    body.append(imagePopupTemplate);
    document.querySelector('.popup__image-container').querySelector('.popup__close-icon').addEventListener('click', function(evt) {
        
        let eventTarget = evt.target;
        eventTarget.parentElement.parentElement.parentElement.remove();
        
    });
    
});

    elements.prepend(element); 
    closePopupPlace ();
    inputImgUrl.value = '';
    inputPlaceName.value = '';
}

addButton.addEventListener('click', openPopupPlace);
popupCloseButtonPlace.addEventListener('click', closePopupPlace);
formPopupPlace.addEventListener('submit', addCardFromPopup);  




/* POPUP profile */

let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');
let inputName = document.querySelector('.popup__field_name');
let inputStatus = document.querySelector('.popup__field_status');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let formPopup = document.querySelector('.popup__form_profile');

function openPopup () {
    popup.classList.remove('popup_hidden');
    inputName.value = profileName.textContent;
    inputStatus.value = profileStatus.textContent;
}
function closePopup () {
    popup.classList.add('popup_hidden');
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputStatus.value;
    closePopup ();
}

popupCloseButton.addEventListener('click', closePopup);
editButton.addEventListener('click', openPopup);
formPopup.addEventListener('submit', formSubmitHandler);
