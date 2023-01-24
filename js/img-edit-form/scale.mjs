import { isPressKey, PressKey } from '../_utils.mjs';

// минимальный масштаб изображения
const IMG_SIZE_MIN = 25;
// максимальный масштаб изображения
const IMG_SIZE_MAX = 100;
// масштаб изображения шаг
const IMG_SIZE_STEP = 25;

const imgEditingForm = document.querySelector('.img-upload__form');

const controlSmaller = imgEditingForm.querySelector('.scale__control--smaller');
const controlBigger = imgEditingForm.querySelector('.scale__control--bigger');
const controlValue = imgEditingForm.querySelector('.scale__control--value');
const imgPreview = imgEditingForm.querySelector('.img-upload__preview > img');

let scaleValue = 100;

const onResizeControlSmaller = () => {
  if (scaleValue > IMG_SIZE_MIN) {
    scaleValue = scaleValue - IMG_SIZE_STEP;
    controlValue.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue * 0.01})`;
  }
};
const onResizeControlBigger = () => {
  if (scaleValue < IMG_SIZE_MAX) {
    scaleValue = scaleValue + IMG_SIZE_STEP;
    controlValue.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue * 0.01})`;
  }
};

controlSmaller.addEventListener('click', onResizeControlSmaller);
controlSmaller.addEventListener('keydown', (evt) => {
  if (isPressKey(evt, PressKey.ENTER)) {
    onResizeControlSmaller();
  }
});
controlBigger.addEventListener('click', onResizeControlBigger);
controlBigger.addEventListener('keydown', (evt) => {
  if (isPressKey(evt, PressKey.ENTER)) {
    onResizeControlBigger();
  }
});
