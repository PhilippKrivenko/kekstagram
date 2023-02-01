// максимальная длинна комментария
const COM_LENGTH_MAX = 140;

const imgEditingForm = document.querySelector('.img-upload__form');
const commentField = imgEditingForm.querySelector('.text__description');

commentField.addEventListener('blur', (evt) => {
  evt.preventDefault();

  const commentLength = commentField.value.length;

  if (commentLength > COM_LENGTH_MAX) {
    commentField.setCustomValidity(`Комментарий не может состовлять белее ${COM_LENGTH_MAX} символ(ов). Уберите ещё ${commentLength - COM_LENGTH_MAX} символ(ов)`);
    evt.target.style.border = '2px solid #8B0000';
  } else {
    commentField.setCustomValidity('');
    evt.target.style.border = '';
  }
});