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

effectLevelValue.value = '100';
effectLevelPin.style.left = '100%';
effectLevelDepth.style.width = '100%';

// МАСШТАБИРОВАНИЕ ГЛУБИНЫ ЭФФЕКТА
const getScaleDepth = (position, lineStart, lineWidth, filterStart, filterEnd) => {
  let effectDepth = filterStart;

  if (position < lineStart) { effectDepth = filterStart; }
  else if (position > (lineStart + lineWidth)) { effectDepth = filterEnd; }
  else { effectDepth = filterStart + ((position - lineStart) / lineWidth * (filterEnd - filterStart)); }

  return effectDepth;
};

// ОБРАБОТЧИК СОБЫТИЯ RANGE
const onMoveAt = (evt) => {
  // наложенный эффект
  const imgValue = img.classList.value;
  // шкала
  const currentEvt = evt.currentTarget.querySelector('.effect-level__line').getBoundingClientRect();
  // ширина шкалы
  const lineWidth = currentEvt.width;
  // координаты начала шкалы
  const lineStart = currentEvt.x;
  // точка нажатия
  const position = evt.clientX;

  const scaleDepth1 = getScaleDepth(position, lineStart, lineWidth, 0, 100).toFixed(0);
  const scaleDepth2 = getScaleDepth(position, lineStart, lineWidth, 0, 1).toFixed(1);
  const scaleDepth3 = getScaleDepth(position, lineStart, lineWidth, 0, 3).toFixed(1);
  const scaleDepth4 = getScaleDepth(position, lineStart, lineWidth, 1, 3).toFixed(1);

  effectLevelDepth.style.width = `${scaleDepth1}%`;
  effectLevelPin.style.left = `${scaleDepth1}%`;
  effectLevelValue.value = `${scaleDepth1}`;

  if (imgValue.includes('chrome', 18)) {
    img.style.filter = `grayscale(${scaleDepth2})`;
  } else if (imgValue.includes('sepia', 18)) {
    img.style.filter = `sepia(${scaleDepth2})`;
  } else if (imgValue.includes('marvin', 18)) {
    img.style.filter = `invert(${scaleDepth1}%)`;
  } else if (imgValue.includes('phobos', 18)) {
    img.style.filter = `blur(${scaleDepth3}px)`;
  } else if (imgValue.includes('heat', 18)) {
    img.style.filter = `brightness(${scaleDepth4})`;
  }
};

effectLevel.addEventListener('mousedown', (evt) => {
  onMoveAt(evt);
  effectLevel.addEventListener('mousemove', onMoveAt);
});

effectLevel.addEventListener('mouseup', () => {
  effectLevel.removeEventListener('mousemove', onMoveAt);
});
