import { ImgFilters } from '../_utils.mjs';

// уровень эффекта
const effectLevel = document.querySelector('.effect-level');
// input
const effectLevelValue = document.querySelector('.effect-level__value');
// пин
const effectLevelPin = document.querySelector('.effect-level__pin');
// глубина эффекта
const effectLevelDepth = document.querySelector('.effect-level__depth');
// изображение
const img = document.querySelector('.img-upload__preview > img');

// МАСШТАБИРОВАНИЕ ГЛУБИНЫ ЭФФЕКТА
const getScaleDepth = (position, lineStart, lineWidth, filterStart, filterEnd) => {
  if (position < lineStart) {
    return filterStart;
  }
  if (position > (lineStart + lineWidth)) {
    return filterEnd;
  }
  if ((position > lineStart) && (position < (lineStart + lineWidth))) {
    return filterStart + ((position - lineStart) / lineWidth * (filterEnd - filterStart));
  }
};

// ОБРАБОТЧИК СОБЫТИЯ RANGE
const onMoveAt = (evt) => {
  // наложенный эффект
  const imgValue = img.classList.value;
  // точка нажатия
  const position = evt.clientX;
  // шкала
  const currentEvt = evt.currentTarget.querySelector('.effect-level__line').getBoundingClientRect();

  const { width: lineWidth, x: lineStart } = currentEvt;

  const scaleDepth = getScaleDepth(position, lineStart, lineWidth, 0, 100).toFixed(0);

  effectLevelDepth.style.width = `${scaleDepth}%`;
  effectLevelPin.style.left = `${scaleDepth}%`;
  effectLevelValue.value = `${scaleDepth}`;

  if (imgValue.includes(ImgFilters.chrome.name)) {
    img.style.filter = `${ImgFilters.chrome.attribute}(${getScaleDepth(position, lineStart, lineWidth, ImgFilters.chrome.min, ImgFilters.chrome.max).toFixed(1)})`;
  }
  if (imgValue.includes(ImgFilters.sepia.name)) {
    img.style.filter = `${ImgFilters.sepia.attribute}(${getScaleDepth(position, lineStart, lineWidth, ImgFilters.sepia.min, ImgFilters.sepia.max).toFixed(1)})`;
  }
  if (imgValue.includes(ImgFilters.marvin.name)) {
    img.style.filter = `${ImgFilters.marvin.attribute}(${getScaleDepth(position, lineStart, lineWidth, ImgFilters.marvin.min, ImgFilters.marvin.max).toFixed(0)}%)`;
  }
  if (imgValue.includes(ImgFilters.phobos.name)) {
    img.style.filter = `${ImgFilters.phobos.attribute}(${getScaleDepth(position, lineStart, lineWidth, ImgFilters.phobos.min, ImgFilters.phobos.max).toFixed(1)}px)`;
  }
  if (imgValue.includes(ImgFilters.heat.name)) {
    img.style.filter = `${ImgFilters.heat.attribute}(${getScaleDepth(position, lineStart, lineWidth, ImgFilters.heat.min, ImgFilters.heat.max).toFixed(1)})`;
  }
};

effectLevel.addEventListener('mousedown', (evt) => {
  onMoveAt(evt);
  effectLevel.addEventListener('mousemove', onMoveAt);
});

effectLevel.addEventListener('mouseup', () => {
  effectLevel.removeEventListener('mousemove', onMoveAt);
});
