const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img > img');
const socialCommentElements = bigPicture.querySelectorAll('.social__comment');

const createCardModal = ({ url, description, likes, comments }) => {
  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.comments-count').textContent = comments.length;

  socialCommentElements.forEach((elem, index) => {
    elem.querySelector('.social__picture').src = comments[index].avatar;
    elem.querySelector('.social__text').textContent = comments[index].message;
  });
};

export { createCardModal };

