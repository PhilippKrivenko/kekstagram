// ОТПРАВКА ФОРМЫ
const addPhotoCard = async (url, formElem) => {
  await fetch(url, {
    method: 'POST',
    body: new FormData(formElem),
  });
};

// ПОЛУЧЕНИЕ ДАННЫХ С СЕРВЕРА
const getUserCards = async (url) => {
  const res = await fetch(url);

  return res.json();
};

export { addPhotoCard, getUserCards };
