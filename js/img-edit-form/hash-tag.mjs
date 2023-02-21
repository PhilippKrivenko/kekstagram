// максимальная длинна хэш-тега включая решётку
const MAX_LENGTH_HASHTAG = 20;
// минимальная длинна хэш-тега включая решётку
const MIN_LENGTH_HASHTAG = 2;
// максимальное число хэш-тегов
const MAX_NUMBER_HASHTAG = 5;

const imgEditingForm = document.querySelector('.img-upload__form');
const hashTagField = imgEditingForm.querySelector('.text__hashtags');

hashTagField.addEventListener('blur', (evt) => {
  evt.preventDefault();

  // требования к хэш-тегу
  const requirements = [];
  // массив регистронезависимых хэш-тегов разделённых 1 и более пробелом и обрезание пробелов по краям
  const hashTags = hashTagField.value.toLowerCase().trim().split(/\s+/);

  // проверка хэш-тегов на дубли
  const hasDuplicates = (arr) => {
    const result = new Set(arr).size !== arr.length;
    return result;
  };

  if (hashTags.length > MAX_NUMBER_HASHTAG) {
    requirements.push('нельзя указать больше пяти хэш-тегов');
  }
  if (hasDuplicates(hashTags)) {
    requirements.push('один и тот же хэш-тег не может быть использован дважды');
  }

  hashTags.forEach((element) => {
    if (element.length < MIN_LENGTH_HASHTAG) {
      requirements.push('хэш-тег должен состоять минимум из 2 символов');
    }
    if (element.length > MAX_LENGTH_HASHTAG) {
      requirements.push('хэш-тег не должен состовлять более 20 символов');
    }
    if (!/^#/.test(element)) {
      requirements.push('хэш-тег начинается с символа # (решётка)');
    }
    if (/[^#a-zA-Z0-9]/g.test(element)) {
      requirements.push('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
    }
    if (element.match(/#/g).length > 1) {
      requirements.push('хэш-теги разделяются пробелами');
    }
  });

  hashTagField.setCustomValidity(requirements.join(', '));

  if (hashTagField.value === 0) {
    hashTagField.setCustomValidity('');
  }
  if (requirements.length > 0) {
    evt.target.style.border = '2px solid #8B0000';
  }
  if (requirements.length === 0) {
    evt.target.removeAttribute('style');
  }
});
