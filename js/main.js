const DESCRIPTIONS = [
  'Пляж',
  'Дорожный указатель',
  'Озеро',
  'Девушка',
  'Суп',
  'Машина',
  'Завтрак',
  'Морс',
  'Море',
  'Столовые приборы',
  'Песок',
  'Ауди',
  'Салат',
  'Котик',
  'Тапки',
  'Горы',
  'Музыка',
  'Гараж',
  'Ночь',
  'Пальмы',
  'Ужин',
  'Закат',
  'Краб',
  'Концерт',
  'Внедорожник',
];

const NAMES = [
  'Артём',
  'Михаил',
  'Александр',
  'Константин',
  'Юлия',
  'Алиса',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё не плохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент.',
];

// КОММЕНТИРИИ
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const NAMBER_OF_COMMENTS = 3;

// КАРТОЧКИ
const MIN_NUMBER_LIKES = 15;
const MAX_NUMBER_LIKES = 200;
const NAMBER_OF_CARDS = 25;


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

//  СОЗДАНИЕ РАНДОМНОГО КОММЕНТАРИЯ
const createComment = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomIntInclusive(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR)}.svg`,
  message: getRandomArrayIndex(MESSAGES),
  name: getRandomArrayIndex(NAMES),
});

const comments = new Array(NAMBER_OF_COMMENTS).fill(null).map((current, index) => createComment(index));


//  СОЗДАНИЕ КАРТОЧКИ
const createCard = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index + 1],
  likes: getRandomIntInclusive(MIN_NUMBER_LIKES, MAX_NUMBER_LIKES),
  comments,
});

const cards = new Array(NAMBER_OF_CARDS).fill(null).map((current, index) => createCard(index));
const shuffledCards = shuffleArray(cards);

