// ОТПРАВКА ФОРМЫ
const addPhotoCard = async (url, formElem) => {
  await fetch(url, {
    method: 'POST',
    body: new FormData(formElem),
  });
};

// ПОЛУЧЕНИЕ ДАННЫХ С СЕРВЕРА
const getPhotoCards = async (url) => {
  const res = await fetch(url);

  return res.json();
};

const baseUrl = 'https://23.javascript.pages.academy/kekstagram';

export { addPhotoCard, getPhotoCards, baseUrl };
