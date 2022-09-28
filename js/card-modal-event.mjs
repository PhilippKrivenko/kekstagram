import { isEnterEvent, isEscEvent } from "./_utils.mjs";

const cardModalElement = document.querySelector('.big-picture');
const cardModalOpenElements = document.querySelectorAll('.picture');
const cardModalCloseElement = document.querySelector('.big-picture__cancel');

const onPopupEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    cardModalElement.classList.add('hidden');
  }
}

const openCardModal = () => {
  cardModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress)
}

const closeCardModal = () => {
  cardModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress)
}

cardModalOpenElements.forEach((elem) => {
  elem.addEventListener('click', openCardModal);
})

cardModalOpenElements.forEach((elem) => {
  elem.addEventListener('keydown', (evt) => {
    if (isEnterEvent(evt)) {
      openCardModal()
    }
  });
})

cardModalCloseElement.addEventListener('click', closeCardModal);

cardModalCloseElement.addEventListener('keydown', (evt) => {
  if (isEnterEvent(evt)) {
    closeCardModal()
  }
});
