// минимальная длинна комментария
const COM_LENGTH_MIN = 30;
// максимальная длинна комментария
const COM_LENGTH_MAX = 100;

const imgEditingForm = document.querySelector('.img-upload__form');
const commentField = imgEditingForm.querySelector('.text__description');

commentField.addEventListener('input', (evt) => {
  const valueLength = commentField.value.length;

  if (valueLength < COM_LENGTH_MIN) {
    commentField.setCustomValidity(`Ещё ${COM_LENGTH_MIN - valueLength} символ(ов)`);
    evt.target.style.border = '2px solid #8B0000';
  }
  else if (valueLength > COM_LENGTH_MAX) {
    commentField.setCustomValidity(`Уберите ещё ${valueLength - COM_LENGTH_MAX} символ(ов)`);
    evt.target.style.border = '2px solid #8B0000';
  }
  else {
    commentField.setCustomValidity('');
    evt.target.style.border = '';
  }
  commentField.reportValidity();
});
