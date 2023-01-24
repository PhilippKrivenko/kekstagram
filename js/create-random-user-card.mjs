import { getRandomIntInclusive } from './_utils.mjs';
import { createComment } from './create-random-comment.mjs';

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

const MIN_NUMBER_LIKES = 15;
const MAX_NUMBER_LIKES = 200;
const MIN_NUMBER_COMMENTS = 1;
const MAX_NUMBER_COMMENTS = 20;

// создать рандомное число комментариев
const getRandomNamberOfComments = () => {
  const comments = new Array(getRandomIntInclusive(MIN_NUMBER_COMMENTS, MAX_NUMBER_COMMENTS)).fill(null).map((current, index) => createComment(index));
  return comments;
};

// создать рандомную карточку изображения
const createUserCard = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index],
  likes: getRandomIntInclusive(MIN_NUMBER_LIKES, MAX_NUMBER_LIKES),
  comments: getRandomNamberOfComments(),
});

export {createUserCard};
