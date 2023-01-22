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

export { getRandomArrayIndex, getRandomIntInclusive, shuffleArray, isPressKey, PressKey };
