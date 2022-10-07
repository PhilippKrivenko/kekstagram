
import { isPressKey } from "./_utils.mjs";
import { userCards } from "./card-dom.mjs";
import { createCardModal } from "./card-modal-dom.mjs";

const cardModalOpenList = document.querySelector('.pictures');
const cardModalElement = document.querySelector('.big-picture');
const cardModalCloseElement = document.querySelector('.big-picture__cancel');

const onPopupEscPress = (evt) => {
  if (isPressKey(evt, 'Escape') || isPressKey(evt, 'Esc')) {
    cardModalElement.classList.remove('modal-open');
    cardModalElement.classList.add('hidden');
  }
}

const onCloseCardModalEvent = (evt) => {
  if (isPressKey(evt, 'Enter')) {
    onCloseCardModal()
  }
};

const onOpenCardModal = () => {
  cardModalCloseElement.focus();
  cardModalElement.classList.remove('hidden');
  cardModalElement.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscPress)

  cardModalCloseElement.addEventListener('click', onCloseCardModal);

  cardModalCloseElement.addEventListener('keydown', onCloseCardModalEvent);
}

const onCloseCardModal = () => {
  cardModalElement.classList.remove('modal-open');
  cardModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress)

  cardModalCloseElement.removeEventListener('click', onCloseCardModal);

  cardModalCloseElement.removeEventListener('keydown', onCloseCardModalEvent);
}

cardModalOpenList.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture__img')) {
    createCardModal(userCards[evt.target.dataset.id]);
    onOpenCardModal();
  }
})

cardModalOpenList.addEventListener('keydown', (evt) => {
  if (isPressKey(evt, 'Enter') && evt.target.closest('.picture__img')) {
    onOpenCardModal();
  }
})
