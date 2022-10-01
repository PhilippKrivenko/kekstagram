import { isPressKey } from "./_utils.mjs";

const cardModalElement = document.querySelector('.big-picture');
const cardModalOpenElements = document.querySelectorAll('.picture');
const cardModalCloseElement = document.querySelector('.big-picture__cancel');

const onPopupEscPress = (evt) => {
  evt.preventDefault();
  if (isPressKey(evt, 'Escape') || isPressKey(evt, 'Esc')) {
    cardModalElement.classList.add('hidden');
  }
}

const onCloseCardModalEvent = (evt) => {
  if (isPressKey(evt, 'Enter')) {
    onCloseCardModal()
  }
};

const onOpenCardModal = () => {
  cardModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress)

  cardModalCloseElement.addEventListener('click', onCloseCardModal);

  cardModalCloseElement.addEventListener('keydown', onCloseCardModalEvent);
}

const onCloseCardModal = () => {
  cardModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress)

  cardModalCloseElement.removeEventListener('click', onCloseCardModal);

  cardModalCloseElement.removeEventListener('keydown', onCloseCardModalEvent);
}

cardModalOpenElements.forEach((elem) => {
  elem.addEventListener('click', onOpenCardModal);

  elem.addEventListener('keydown', (evt) => {
    if (isPressKey(evt, 'Enter')) {
      onOpenCardModal()
    }
  });
})

