import { ImgFilters } from '../_utils.mjs';

// форма редактирования изображения
const imgEditingForm = document.querySelector('.img-upload__form');
// список эффектов
const effectsList = imgEditingForm.querySelector('.effects__list');
// изображение
const imgPreview = imgEditingForm.querySelector('.img-upload__preview > img');
// уровень эффекта
const effectLevel = document.querySelector('.effect-level');
// input
const effectLevelValue = document.querySelector('.effect-level__value');
// пин
const effectLevelPin = document.querySelector('.effect-level__pin');
// глубина эффекта
const effectLevelDepth = document.querySelector('.effect-level__depth');

// ПЕРЕКЛЮЧЕНИЕ ЭФФЕКТА
const onEffectsRadio = (value) => {
  // добавление стиля
  imgPreview.classList = '';
  imgPreview.classList.add(`effects__preview--${value}`);

  effectLevelValue.value = '100';
  effectLevelPin.style.left = '100%';
  effectLevelDepth.style.width = '100%';

  // фильтры
  if (value === ImgFilters.chrome.name) {
    imgPreview.style.filter = `${ImgFilters.chrome.attribute}(${ImgFilters.chrome.max})`;
  }
  if (value === ImgFilters.sepia.name) {
    imgPreview.style.filter = `${ImgFilters.sepia.attribute}(${ImgFilters.sepia.max})`;
  }
  if (value === ImgFilters.marvin.name) {
    imgPreview.style.filter = `${ImgFilters.marvin.attribute}(${ImgFilters.marvin.max}%)`;
  }
  if (value === ImgFilters.phobos.name) {
    imgPreview.style.filter = `${ImgFilters.phobos.attribute}(${ImgFilters.phobos.max}px)`;
  }
  if (value === ImgFilters.heat.name) {
    imgPreview.style.filter = `${ImgFilters.heat.attribute}(${ImgFilters.heat.max})`;
  }

  // скрытие/показ шкалы
  if (value === 'none') {
    effectLevel.classList.add('hidden');
  }
  if (value !== 'none') {
    effectLevel.classList.remove('hidden');
  }
};

effectsList.addEventListener('change', (evt) => {
  onEffectsRadio(evt.target.defaultValue);
});
