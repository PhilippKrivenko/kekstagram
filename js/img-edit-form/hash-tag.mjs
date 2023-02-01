// максимальная длинна хэш-тега включая решётку
const maxLengthHashTag = 20;
// максимальное число хэш-тегов
const maxNamberHashTag = 5;

const imgEditingForm = document.querySelector('.img-upload__form');
const hashTagField = imgEditingForm.querySelector('.text__hashtags');

hashTagField.addEventListener('blur', (evt) => {
  evt.preventDefault();

});
