import { isPressKey, PressKey, clearForm } from '../_utils.mjs';

const form = document.querySelector('.img-upload__form');
// окна сообщений этапов загрузки
const loading = document.querySelector('#messages').content.querySelector('.img-upload__message').cloneNode(true);
const success = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const fail = document.querySelector('#error').content.querySelector('.error').cloneNode(true);


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


// обработчик события на кнопку закрытия сообщения
const onOpenMessage = (button) => {
  document.addEventListener('keydown', onPopupEscPress);
  button.addEventListener('click', onCloseMessage);
  button.addEventListener('keydown', onPopupEnterPress);
};
const onCloseMessage = (button) => {
  success.remove();
  fail.remove();

  document.removeEventListener('keydown', onPopupEscPress);
  button.removeEventListener('click', onCloseMessage);
  button.removeEventListener('keydown', onPopupEnterPress);
};


const postData = async (url, formElem) => {
  const res = await fetch(url, {
    method: 'POST',
    body: new FormData(formElem),
  });

  return await res.text();
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  document.body.append(loading);

  postData('https://2agram', form)
    .then(() => {
      loading.remove();
      document.body.append(success);
      const successButton = document.querySelector('.success__button');
      clearForm();
      onOpenMessage(successButton);
    })
    .catch(() => {
      loading.remove();
      document.body.append(fail);
      const errorButton = document.querySelector('.error__button');
      onOpenMessage(errorButton);
    });
});
