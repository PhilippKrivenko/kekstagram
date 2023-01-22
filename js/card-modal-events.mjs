import { isPressKey, PressKey } from "./_utils.mjs";
import { userCards } from "./card-list-dom.mjs";
import { createCardModal } from "./card-modal-dom.mjs";

// КОНТЕЙНЕР ДЛЯ КАРТОЧЕК
const cardModalOpenList = document.querySelector('.pictures');
// КАРТОЧКА ФОТОГРАФИИ
const cardModalElement = document.querySelector('.big-picture');
// КНОПКА ЗАКРЫТИЯ КАРТОЧКИ ФОТОГРАФИИ
const cardModalCloseElement = document.querySelector('.big-picture__cancel');

// ОБРАБОТЧИК НА DOCUMENT ДЛЯ КАРТОЧКИ С КЛАВИАТУРЫ ЧЕРЕЗ ESC
const onPopupEscPress = (evt) => {
  if (isPressKey(evt, PressKey.ESCAPE) || isPressKey(evt, PressKey.ESC)) {
    cardModalElement.classList.add('hidden');
    cardModalElement.classList.remove('modal-open');
  }
}

// ОБРАБОТЧИК НА КНОПКУ ЗАКРЫТИЯ КАРТОЧКИ С КЛАВИАТУРЫ ЧЕРЕЗ ENTER
const onCloseCardModalEvent = (evt) => {
  if (isPressKey(evt, PressKey.ENTER)) {
    onCloseCardModal()
  }
};

// ОБРАБОТЧИК ОТКРЫТИЯ КАРТОЧКИ
const onOpenCardModal = () => {
  // cardModalCloseElement.focus();
  cardModalElement.classList.remove('hidden');
  cardModalElement.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscPress)

  cardModalCloseElement.addEventListener('click', onCloseCardModal);

  cardModalCloseElement.addEventListener('keydown', onCloseCardModalEvent);
}

// ОБРАБОТЧИК ЗАКРЫТИЯ КАРТОЧКИ
const onCloseCardModal = () => {
  cardModalElement.classList.add('hidden');
  cardModalElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscPress)

  cardModalCloseElement.removeEventListener('click', onCloseCardModal);

  cardModalCloseElement.removeEventListener('keydown', onCloseCardModalEvent);
}

// ДОБАВЛЕНИЕ ОБРАБОТЧИКА СОБЫТИЯ КАРТОЧКАМ ЧЕРЕЗ ИХ КОНТЕЙНЕР ПУТЕМ ДЕЛЕГИРОВАНИЯ
cardModalOpenList.addEventListener('click', (evt) => {
  if (evt.target.closest('.picture__img')) {
    createCardModal(userCards[evt.target.dataset.id]);
    onOpenCardModal();
  }
})

cardModalOpenList.addEventListener('keydown', (evt) => {
  if (isPressKey(evt, PressKey.ENTER) && evt.target.closest('.picture__img')) {
    createCardModal(userCards[evt.target.dataset.id]);
    onOpenCardModal();
  }
})
