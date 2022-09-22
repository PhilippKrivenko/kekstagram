import {getRandomArrayIndex, getRandomIntInclusive} from './_utils.mjs';

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

const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;

const createComment = (index) => ({
  id: index + 1,
  avatar: `img/avatar-${getRandomIntInclusive(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR)}.svg`,
  message: getRandomArrayIndex(MESSAGES),
  name: getRandomArrayIndex(NAMES),
});

export {createComment};
