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

class Card {
    constructor(name, link, cardSelector) {
        this._name = name;
        this._link = link;
        this._cardSelector = cardSelector;
    }
    _getTemplate() {
        const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);

        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__place-name').textContent = this._name;
        
        this._likeCard();
        this._deleteCard();
        this._openPopupCard();

        return this._element;
    }
    _likeCard() {
        this._element.querySelector('.element__like').addEventListener('click', (evt) => {
            evt.target.classList.toggle('element__like_active');
        });
    }
    _deleteCard() {
        this._element.querySelector('.element__delete-icon').addEventListener('click', (evt) => {
            evt.target.parentElement.remove();
        });
    }
    _openPopupCard() {
        this._element.querySelector('.element__image').addEventListener('click', function(evt) {
            
            imagePopupLink.src = evt.target.src;
            imagePopupTitle.textContent = evt.target.alt;
            openPopup(popupPhoto);
        });
    }
}



