import { showComments } from '../_utils.mjs';

const createCardModal = ({ url, description, likes, comments }) => {

  const NUMBER_COMMENTS = 5;

  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImg = bigPicture.querySelector('.big-picture__img > img');

  showComments(NUMBER_COMMENTS, comments);

  bigPictureImg.src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.comments-count-current').textContent = document.querySelector('.social__comments').children.length;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
};

export { createCardModal };
