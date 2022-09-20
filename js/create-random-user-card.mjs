import { getRandomIntInclusive } from './_utils.mjs';
import { createComment } from './create-randndom-comment.mjs';

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
const MIN_NAMBER_COMMENTS = 1;
const MAX_NAMBER_COMMENTS = 20;


const getRandomNamberOfComments = () => {
  const comments = new Array(getRandomIntInclusive(MIN_NAMBER_COMMENTS, MAX_NAMBER_COMMENTS)).fill(null).map((current, index) => createComment(index));
  return comments
}

const createUserCard = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index],
  likes: getRandomIntInclusive(MIN_NUMBER_LIKES, MAX_NUMBER_LIKES),
  comments: getRandomNamberOfComments(),
});

export {createUserCard};
