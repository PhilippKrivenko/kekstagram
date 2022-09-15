import { getRandomIntInclusive, shuffleArray } from './_utils.mjs';
import { comments } from './comments.mjs';

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
const NAMBER_OF_CARDS = 25;

const createCard = (index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[index + 1],
  likes: getRandomIntInclusive(MIN_NUMBER_LIKES, MAX_NUMBER_LIKES),
  comments,
});

const cards = new Array(NAMBER_OF_CARDS).fill(null).map((current, index) => createCard(index));
const shuffledCards = shuffleArray(cards);
