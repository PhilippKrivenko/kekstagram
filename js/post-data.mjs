import { clearForm } from './_utils.mjs';
import { onOpenMessage } from './status-message.mjs';
import { postFormData } from './_API.mjs';

const imgEditForm = document.querySelector('.img-upload__form');

imgEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const loading = document.querySelector('#messages').content.querySelector('.img-upload__message').cloneNode(true);
  document.body.append(loading);

  postFormData('https://23.javascript.pages.academy/kekstagram', imgEditForm)
    .finally(() => {
      loading.remove();
    })
    .then(() => {
      const success = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
      document.body.append(success);
      const successButton = document.querySelector('.success__button');
      onOpenMessage(successButton);
      clearForm();
    })
    .catch(() => {
      const fail = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
      document.body.append(fail);
      const errorButton = document.querySelector('.error__button');
      onOpenMessage(errorButton);
    });
});
