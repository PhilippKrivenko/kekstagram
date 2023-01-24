import { isPressKey, PressKey } from '../_utils.mjs';

const body = document.querySelector('body');
// форма редактирования изображения
const imgEditForm = document.querySelector('.img-upload__overlay');
// кнопка закрытия формы редактирования изображения
const imgEditFormCancel = document.querySelector('.img-upload__cancel');
// кнопка загрузки изображения
const imgUpload = document.querySelector('.img-upload__input');
// кнопка отправки данных на сервер
const imgUploadSubmit = document.querySelector('.img-upload__submit');

// обработчик на document для закрытия формы с клавиатуры через esc
const onPopupEscPress = (evt) => {
  if (isPressKey(evt, PressKey.ESCAPE) || isPressKey(evt, PressKey.ESCAPE)) {
    imgEditForm.classList.add('hidden');
    imgEditForm.classList.remove('modal-open');
  }
};
// обработчик на кнопку закрытия формы с клавиатуры через enter
const onPopupEnterPress = (evt) => {
  if (isPressKey(evt, PressKey.ENTER)) {
    onCloseUploadForm()
  }
};

// обработчик открытия формы редактирования изображения
const onOpenUploadForm = () => {
  imgEditFormCancel.focus();

  body.classList.add('modal-open');
  imgEditForm.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  imgEditFormCancel.addEventListener('click', onCloseUploadForm);
  imgEditFormCancel.addEventListener('keydown', onPopupEnterPress);

  imgUploadSubmit.addEventListener('click', onCloseUploadForm);
  imgUploadSubmit.addEventListener('keydown', onPopupEnterPress);
};

// обработчик закрытия формы редактирования изображения
const onCloseUploadForm = () => {
  body.classList.remove('modal-open');
  imgEditForm.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
  imgEditFormCancel.removeEventListener('click', onCloseUploadForm);
  imgEditFormCancel.removeEventListener('keydown', onPopupEnterPress);

  imgUploadSubmit.removeEventListener('click', onCloseUploadForm);
  imgUploadSubmit.removeEventListener('keydown', onPopupEnterPress);
};

// добавление обработчика события кнопке загрузки изображения
imgUpload.addEventListener('change', onOpenUploadForm);
