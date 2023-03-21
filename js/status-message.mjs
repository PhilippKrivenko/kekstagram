import { PressKey } from './_data.mjs';
import { isPressKey } from './_utils.mjs';

const onPopupEscPress = (evt) => {
  if (isPressKey(evt, PressKey.ESCAPE) || isPressKey(evt, PressKey.ESC)) {
    onCloseMessage();
  }
};
const onPopupEnterPress = (evt) => {
  if (isPressKey(evt, PressKey.ENTER)) {
    onCloseMessage();
  }
};
const onOutsidePress = (evt) => {
  if (!(evt.target.closest('.success__inner') || evt.target.closest('.error__inner'))) {
    onCloseMessage();
  }
};


const onOpenMessage = (button) => {
  document.addEventListener('click', onOutsidePress);
  document.addEventListener('keydown', onPopupEscPress);
  button.addEventListener('click', onCloseMessage);
  button.addEventListener('keydown', onPopupEnterPress);
};
const onCloseMessage = (button) => {
  const success = document.querySelector('.success');
  const error = document.querySelector('.error');

  if (success) { success.remove(); }
  if (error) { error.remove(); }

  document.removeEventListener('click', onOutsidePress);
  document.removeEventListener('keydown', onPopupEscPress);
  button.removeEventListener('click', onCloseMessage);
  button.removeEventListener('keydown', onPopupEnterPress);
};

export { onOpenMessage };
