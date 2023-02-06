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

export { getRandomArrayIndex, getRandomIntInclusive, shuffleArray, isPressKey, PressKey, ImgFilters };
