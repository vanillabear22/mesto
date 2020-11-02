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
export {openPopup, closePopup }