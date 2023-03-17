// ПОЛУЧИТЬ РАНДОМНОЕ ЧИСЛО
const getRandomIntInclusive = (min, max) => {
  const minRnd = Math.ceil(min);
  const maxRnd = Math.floor(max);
  return Math.floor(Math.random() * (maxRnd - minRnd + 1)) + minRnd;
};

// ПОЛУЧИТЬ РАНДОМНЫЙ ЭЛЕМЕНТ МАССИВА
const getRandomArrayIndex = (array) => array[getRandomIntInclusive(0, array.length - 1)];

// ПЕРЕМЕШАТЬ МАССИВ
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// ПРОВЕРКА НА НАЖАТИЕ КЛАВИШИ
const isPressKey = (evt, pressKey) => evt.key === pressKey;

const PressKey = {
  ENTER: 'Enter',
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const ImgFilters = {
  origin: {
    name: 'none',
  },
  chrome: {
    name: 'chrome',
    attribute: 'grayscale',
    min: 0,
    max: 1,
  },
  sepia: {
    name: 'sepia',
    attribute: 'sepia',
    min: 0,
    max: 1,
  },
  marvin: {
    name: 'marvin',
    attribute: 'invert',
    min: 0,
    max: 100,
  },
  phobos: {
    name: 'phobos',
    attribute: 'blur',
    min: 0,
    max: 3,
  },
  heat: {
    name: 'heat',
    attribute: 'brightness',
    min: 1,
    max: 3,
  },
};

// возвращение данных в исходную форму
const clearForm = () => {
  const scaleValue = document.querySelector('.scale__control--value');
  const effectLevelValue = document.querySelector('.effect-level__value');
  const imgPreview = document.querySelector('.img-upload__preview > img');
  const effectLevelPin = document.querySelector('.effect-level__pin');
  const effectLevelDepth = document.querySelector('.effect-level__depth');
  const effectOrigin = document.querySelector('#effect-none');
  const hashTagField = document.querySelector('.text__hashtags');
  const commentField = document.querySelector('.text__description');
  const uploadFile = document.querySelector('#upload-file');

  scaleValue.value = '100%';

  imgPreview.style.filter = 'none';
  imgPreview.style.transform = 'none';
  effectLevelValue.value = '100';
  effectLevelPin.style.left = '100%';
  effectLevelDepth.style.width = '100%';
  effectOrigin.checked = true;

  hashTagField.value = '';
  commentField.value = '';
  uploadFile.value = '';
};

export { getRandomArrayIndex, getRandomIntInclusive, shuffleArray, isPressKey, clearForm, PressKey, ImgFilters };
