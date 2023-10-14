import { PressKey } from '../_data.mjs';
import { createCardModal } from './dom.mjs';
import { isPressKey } from '../_utils.mjs';
import { onUploudComments } from './upload-comments.mjs';

const body = document.querySelector('body');
// контейнер для карточек
const cardModalOpenList = document.querySelector('.pictures');
// карточка фотографии
const cardModalElement = document.querySelector('.big-picture');
// кнопка закрытия карточки фотографии
const cardModalCloseElement = document.querySelector('.big-picture__cancel');


function onOpenCardModal() {
  cardModalCloseElement.focus();
  cardModalElement.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onPopupEscPress);
  cardModalCloseElement.addEventListener('click', onCloseCardModal);
  cardModalCloseElement.addEventListener('keydown', onCloseCardModalEvent);
}

function onCloseCardModal() {
  const commentsLouder = document.querySelector('.social__comments-loader');

  cardModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.querySelector('.social__comments').innerHTML = '';
  commentsLouder.classList.remove('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  cardModalCloseElement.removeEventListener('click', onCloseCardModal);
  cardModalCloseElement.removeEventListener('keydown', onCloseCardModalEvent);
}
function onPopupEscPress(evt) {
  if (isPressKey(evt, PressKey.ESCAPE) || isPressKey(evt, PressKey.ESC)) {
    onCloseCardModal();
  }
}

function onCloseCardModalEvent(evt) {
  if (isPressKey(evt, PressKey.ENTER)) {
    onCloseCardModal();
  }
}


function onCardModal(userCards) {
  cardModalOpenList.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      const userCard = userCards[evt.target.closest('.picture').id];

      createCardModal(userCard);
      onOpenCardModal();
      onUploudComments(userCard.comments);
    }
  });

  cardModalOpenList.addEventListener('keydown', (evt) => {
    if (isPressKey(evt, PressKey.ENTER) && evt.target.closest('.picture')) {
      createCardModal(userCards[evt.target.closest('.picture').id]);
      onOpenCardModal();
    }
  });
}

export { onCardModal };
