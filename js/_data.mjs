const PressKey = {
  ENTER: 'Enter',
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

// ФИЛЬТРЫ ИЗОБРАЖЕНИЯ
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

export { PressKey, ImgFilters };
