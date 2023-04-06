import { PressKey } from '../_data.mjs';
import { isPressKey, clearForm } from '../_utils.mjs';

const body = document.querySelector('body');
// форма редактирования изображения
const imgEditForm = document.querySelector('.img-upload__overlay');
// кнопка закрытия формы редактирования изображения
const imgEditFormCancel = document.querySelector('.img-upload__cancel');
// кнопка загрузки изображения
const imgUpload = document.querySelector('.img-upload__input');
// кнопка отправки данных на сервер
const sendingFormButton = document.querySelector('.img-upload__form');

function onOpenUploadForm() {
  imgEditFormCancel.focus();

  body.classList.add('modal-open');
  imgEditForm.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  imgEditFormCancel.addEventListener('click', onCloseUploadForm);
  imgEditFormCancel.addEventListener('keydown', onPopupEnterPress);
  sendingFormButton.addEventListener('submit', onCloseUploadForm);
}

function onCloseUploadForm() {
  clearForm();

  body.classList.remove('modal-open');
  imgEditForm.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  imgEditFormCancel.removeEventListener('click', onCloseUploadForm);
  imgEditFormCancel.removeEventListener('keydown', onPopupEnterPress);
  sendingFormButton.removeEventListener('submit', onCloseUploadForm);
}

function onPopupEscPress(evt) {
  if (isPressKey(evt, PressKey.ESCAPE) || isPressKey(evt, PressKey.ESC)) {
    onCloseUploadForm();
  }
}

function onPopupEnterPress(evt) {
  if (isPressKey(evt, PressKey.ENTER)) {
    onCloseUploadForm();
  }
}

imgUpload.addEventListener('change', onOpenUploadForm);
