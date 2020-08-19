let editButton = document.querySelector('.profile__editButton');
let popupCloseButton = document.querySelector('.popup__close-icon');
let popup = document.querySelector('.popup');
let inputName = document.querySelector('.popup__field_name');
let inputStatus = document.querySelector('.popup__field_status');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');


function openPopup () {
    popup.classList.remove('popup_hidden');
    inputName.placeholder = profileName.textContent;
    inputStatus.placeholder = profileStatus.textContent;
}
function closePopup () {
    popup.classList.add('popup_hidden');
}
editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

let formPopup = document.querySelector('.popup__form');
console.log(formPopup);
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = inputName.value;
    profileStatus.textContent = inputStatus.value;
    closePopup ();
}

formPopup.addEventListener('submit', formSubmitHandler);
