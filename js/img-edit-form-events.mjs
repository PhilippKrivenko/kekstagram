import { isPressKey } from "./_utils.mjs";
import { PRESS_KEY } from "./_scripts.mjs";

// ФОРМА РЕДАКТИРОВАНИЯ ИЗОБРАЖЕНИЯ
const imgEditForm = document.querySelector('.img-upload__overlay');
// КНОПКА ЗАКРЫТИЯ ФОРМЫ РЕДАКТИРОВАНИЯ ИЗОБРАЖЕНИЯ
const imgEditFormCancel = document.querySelector('.img-upload__cancel');
// КНОПКА ЗАГРУЗКИ ИЗОБРАЖЕНИЯ
const imgUpload = document.querySelector('.img-upload__input');
// КНОПКА ОТПРАВКИ ДАННЫХ НА СЕРВЕР
const imgUploadSubmit = document.querySelector('.img-upload__submit');

// ОБРАБОТЧИК НА DOCUMENT ДЛЯ ЗАКРЫТИЯ ФОРМЫ С КЛАВИАТУРЫ ЧЕРЕЗ ESC
const onPopupEscPress = (evt) => {
  if (isPressKey(evt, PRESS_KEY.ESCAPE) || isPressKey(evt, PRESS_KEY.ESCAPE)) {
    imgEditForm.classList.add('hidden');
    imgEditForm.classList.remove('modal-open');
  }
}

// ОБРАБОТЧИК НА КНОПКУ ЗАКРЫТИЯ ФОРМЫ С КЛАВИАТУРЫ ЧЕРЕЗ ENTER
const onPopupEnterPress = (evt) => {
  if (isPressKey(evt, PRESS_KEY.ENTER)) {
    onCloseUploadForm()
  }
};

// ОБРАБОТЧИК ОТКРЫТИЯ ФОРМЫ РЕДАКТИРОВАНИЯ ИЗОБРАЖЕНИЯ
const onOpenUploadForm = () => {
  imgEditFormCancel.focus();

  imgEditForm.classList.add('modal-open');
  imgEditForm.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  imgEditFormCancel.addEventListener('click', onCloseUploadForm);
  imgEditFormCancel.addEventListener('keydown', onPopupEnterPress);

  imgUploadSubmit.addEventListener('click', onCloseUploadForm);
  imgUploadSubmit.addEventListener('keydown', onPopupEnterPress);
}

// ОБРАБОТЧИК ЗАКРЫТИЯ ФОРМЫ РЕДАКТИРОВАНИЯ ИЗОБРАЖЕНИЯ
const onCloseUploadForm = () => {
  imgEditForm.classList.add('hidden');
  imgEditForm.classList.remove('modal-open');

  document.removeEventListener('keydown', onPopupEscPress);
  imgEditFormCancel.removeEventListener('click', onCloseUploadForm);
  imgEditFormCancel.removeEventListener('keydown', onPopupEnterPress);

  imgUploadSubmit.removeEventListener('click', onCloseUploadForm);
  imgUploadSubmit.removeEventListener('keydown', onPopupEnterPress);
}

// ДОБАВЛЕНИЕ ОБРАБОТЧИКА СОБЫТИЯ КНОПКЕ ЗАГРУЗКИ ИЗОБРАЖЕНИЯ
imgUpload.addEventListener('change', onOpenUploadForm);