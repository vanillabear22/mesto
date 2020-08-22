let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');
let inputName = document.querySelector('.popup__field_name');
let inputStatus = document.querySelector('.popup__field_status');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');


function openPopup () {
    popup.classList.remove('popup_hidden');
    inputName.value = profileName.textContent;
    inputStatus.value = profileStatus.textContent;
}
function closePopup () {
    popup.classList.add('popup_hidden');
}

popupCloseButton.addEventListener('click', closePopup);

let formPopup = document.querySelector('.popup__form');
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputStatus.value;
    closePopup ();
}
editButton.addEventListener('click', openPopup);
formPopup.addEventListener('submit', formSubmitHandler);
