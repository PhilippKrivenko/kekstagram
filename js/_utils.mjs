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

// ПРОВЕРКА НА НАЖАТИЕ КЛАВИШИ
const isPressKey = (evt, pressKey) => evt.key === pressKey;

// ВОЗВРАЩЕНИЕ ДАННЫХ ФОРМЫ В ИСХОДНУЮ ФОРМУ
const clearForm = () => {
  const scaleValue = document.querySelector('.scale__control--value');
  const effectLevelValue = document.querySelector('.effect-level__value');
  const imgPreview = document.querySelector('.img-upload__preview > img');
  const effectLevelPin = document.querySelector('.effect-level__pin');
  const effectLevelDepth = document.querySelector('.effect-level__depth');
  const effectOrigin = document.querySelector('#effect-none');
  const hashTagField = document.querySelector('.text__hashtags');
  const commentField = document.querySelector('.text__description');
  const uploadFile = document.querySelector('#upload-file');

  scaleValue.value = '100%';

  imgPreview.style.filter = 'none';
  imgPreview.style.transform = 'none';
  effectLevelValue.value = '100';
  effectLevelPin.style.left = '100%';
  effectLevelDepth.style.width = '100%';
  effectOrigin.checked = true;

  hashTagField.value = '';
  commentField.value = '';
  uploadFile.value = '';
};

const showComments = (numberComments, comments) => {
  const commentsElementTemplate = document.querySelector('#social__comment').content.querySelector('.social__comment');
  const commentList = document.querySelector('.social__comments');
  const commentListFragment = document.createDocumentFragment();
  const numberComment = commentList.children.length;

  for (let i = 0; (i < numberComments) & (numberComment + i) < comments.length; i++) {
    const commentsElement = commentsElementTemplate.cloneNode(true);
    const avatar = commentsElement.querySelector('.social__picture');
    const idComment = numberComment + i;

    avatar.src = comments[idComment].avatar;
    avatar.alt = comments[idComment].name;
    commentsElement.querySelector('.social__text').textContent = comments[idComment].message;

    commentListFragment.append(commentsElement);
  }

  commentList.append(commentListFragment);
};

export { getRandomArrayIndex, getRandomIntInclusive, shuffleArray, isPressKey, clearForm, showComments };
