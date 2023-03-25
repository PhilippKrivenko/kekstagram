import { isPressKey } from '../_utils.mjs';
import { PressKey } from '../_data.mjs';
import { showComments } from '../_utils.mjs';

const NUMBER_COMMENTS = 2;

const bigPicture = document.querySelector('.big-picture');
const commentsLouder = bigPicture.querySelector('.social__comments-loader');
const currentComments = bigPicture.querySelector('.comments-count-current');

const onUploudCommentsEvent = (comments) => {
  showComments(NUMBER_COMMENTS, comments);
  currentComments.textContent = document.querySelector('.social__comments').children.length;

  if (currentComments.innerHTML === document.querySelector('.comments-count').innerHTML) {
    document.querySelector('.social__comments-loader').classList.add('hidden');
  }
};
const onUploudCommentsKeydown = (evt, comments) => {
  if (isPressKey(evt, PressKey.ENTER)) {
    onUploudCommentsEvent(comments);
  }
};


const onUploudComments = (comments) => {
  commentsLouder.addEventListener('click', () => {
    onUploudCommentsEvent(comments);
  });
  commentsLouder.addEventListener('keydown', (evt) => {
    onUploudCommentsKeydown(evt, comments);
  });
};


export { onUploudComments };
