// форма редактирования изображения
const imgEditingForm = document.querySelector('.img-upload__form');
// список эффектов
const effectsList = imgEditingForm.querySelector('.effects__list');
// изображение
const imgPreview = imgEditingForm.querySelector('.img-upload__preview > img');
// уровень эффекта
const effectLevel = document.querySelector('.effect-level');

// ПЕРЕКЛЮЧЕНИЕ ЭФФЕКТА
const onEffectsRadio = (value) => {
  // добавление стиля
  imgPreview.classList = '';
  imgPreview.classList.add(`effects__preview--${value}`);

  // фильтры
  if (value === 'chrome') {
    imgPreview.style.filter = 'grayscale(1)';
  } else if (value === 'sepia') {
    imgPreview.style.filter = 'sepia(1)';
  } else if (value === 'marvin') {
    imgPreview.style.filter = 'invert(100%)';
  } else if (value === 'phobos') {
    imgPreview.style.filter = 'blur(3px)';
  } else if (value === 'heat') {
    imgPreview.style.filter = 'brightness(3)';
  }

  // скрытие/показ шкалы
  if (value === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }
};

effectsList.addEventListener('change', (evt) => {
  onEffectsRadio(evt.target.defaultValue);
});
