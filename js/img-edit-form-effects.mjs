const imgEditingForm = document.querySelector('.img-upload__form');
const effectsList = imgEditingForm.querySelector('.effects__list');
const imgPreview = imgEditingForm.querySelector('.img-upload__preview > img');

const onEffectsRadio = (value) => {
  imgPreview.classList = '';
  imgPreview.classList.add(`effects__preview--${value}`);
};

effectsList.addEventListener('change', (evt) => {
  onEffectsRadio(evt.target.defaultValue);
  console.log(evt);
});
