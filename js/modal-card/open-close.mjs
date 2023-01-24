import { isPressKey, PressKey } from '../_utils.mjs';
import { userCards } from '../card-list-dom.mjs';
import { createCardModal } from './dom.mjs';

const body = document.querySelector('body');
// контейнер для карточек
const cardModalOpenList = document.querySelector('.pictures');
// карточка фотографии
const cardModalElement = document.querySelector('.big-picture');
// кнопка закрытия карточки фотографии
const cardModalCloseElement = document.querySelector('.big-picture__cancel');

// обработчик на document для карточки с клавиатуры через esc
const onPopupEscPress = (evt) => {
  if (isPressKey(evt, PressKey.ESCAPE) || isPressKey(evt, PressKey.ESC)) {
    cardModalElement.classList.add('hidden');
    cardModalElement.classList.remove('modal-open');
  }
};
// обработчик на кнопку закрытия карточки с клавиатуры через enter
const onCloseCardModalEvent = (evt) => {
  if (isPressKey(evt, PressKey.ENTER)) {
    onCloseCardModal()
  }
};

// обработчик открытия карточки
const onOpenCardModal = () => {
  cardModalCloseElement.focus();
  cardModalElement.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscPress);

  cardModalCloseElement.addEventListener('click', onCloseCardModal);
  cardModalCloseElement.addEventListener('keydown', onCloseCardModalEvent);
};
// обработчик закрытия карточки
const onCloseCardModal = () => {
  cardModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscPress);

  cardModalCloseElement.removeEventListener('click', onCloseCardModal);
  cardModalCloseElement.removeEventListener('keydown', onCloseCardModalEvent);
};

// добавление обработчика события карточкам (делегирование)
cardModalOpenList.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture')) {
    createCardModal(userCards[evt.target.closest('.picture').dataset.id]);
    onOpenCardModal();
  }
});
cardModalOpenList.addEventListener('keydown', (evt) => {
  if (isPressKey(evt, PressKey.ENTER) && evt.target.closest('.picture')) {
    createCardModal(userCards[evt.target.closest('.picture').dataset.id]);
    onOpenCardModal();
  }
});
