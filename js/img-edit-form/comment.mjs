// максимальная длина комментария
const COM_LENGTH_MAX = 14;

const imgEditingForm = document.querySelector('.img-upload__form');
const commentField = imgEditingForm.querySelector('.text__description');

commentField.addEventListener('blur', (evt) => {
  evt.preventDefault();

  const commentLength = commentField.value.length;

  commentField.setCustomValidity('');
  evt.target.style.border = '';

  if (commentLength > COM_LENGTH_MAX) {
    commentField.setCustomValidity(`Комментарий не может составлять более ${COM_LENGTH_MAX} символ(ов). Уберите ещё ${commentLength - COM_LENGTH_MAX} символ(ов)`);
    evt.target.style.border = '2px solid #8B0000';
  }
});
