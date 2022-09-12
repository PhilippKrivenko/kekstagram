const _ = require('lodash');

const descriptions = [
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

const names = [
  'Арём',
  'Михаил',
  'Александр',
  'Константин',
  'Юлия',
  'Алиса',
];

const messages = [
  'Всё отлично!',
  'В целом всё не плохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент.',
];

const getRandomArrayIndex = (array) => array[_.random(0, array.length - 1)];
const getRandomPhoto = _.random(1, 25);

// Комментарии
const createComment = () => ({
  id: _.random(1, 200),
  avatar: `img/avatar-${_.random(1, 6)}.svg`,
  message: getRandomArrayIndex(messages),
  name: getRandomArrayIndex(names),
});

const comments = new Array(3).fill(null).map(() => createComment());

//Карточка
const createCard = () => ({
  id: _.random(1, 25),
  url: `photos/${getRandomPhoto}.jpg`,
  description: descriptions[getRandomPhoto],
  likes: _.random(15, 200),
  comments,
});

const card = new Array(25).fill(null).map(() => createCard());

console.log(comments);
console.log(card);
