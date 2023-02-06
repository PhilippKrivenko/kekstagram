// максимальная длинна хэш-тега включая решётку
const MAX_LENGTH_HASHTAG = 20;
// максимальное число хэш-тегов
const MAX_NUMBER_HASHTAG = 5;

const imgEditingForm = document.querySelector('.img-upload__form');
const hashTagField = imgEditingForm.querySelector('.text__hashtags');

hashTagField.addEventListener('blur', (evt) => {
  evt.preventDefault();

  // массив регистронезависимых хэш-тегов разделённых 1 и более пробелом и обрезание пробелов по краям
  const hashTags = hashTagField.value.toLowerCase().replace(/\s+$/, '').replace(/^\s+/, '').split(/\s+/);
  // колличество хэш-тегов
  const hashTagsNumber = hashTags.length;
  // шаблон хэш-тега
  const regExp = new RegExp(`^#[0-9\\p{L}]{1,${MAX_LENGTH_HASHTAG - 1}}`, 'u');

  // проверка хэш-тегов на дубли
  const hasDuplicates = (arr) => {
    const result = new Set(arr).size !== arr.length;
    return result;
  };

  hashTagField.setCustomValidity('');
  evt.target.style.border = '';

  if (hashTagsNumber > MAX_NUMBER_HASHTAG) {
    hashTagField.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    evt.target.style.border = '2px solid #8B0000';
  }
  if (hasDuplicates(hashTags)) {
    hashTagField.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
    evt.target.style.border = '2px solid #8B0000';
  }

  hashTags.forEach((element) => {
    if (!regExp.test(element)) {
      hashTagField.setCustomValidity('не валидный хэш-тег');
      evt.target.style.border = '2px solid #8B0000';
    }
  });
});
