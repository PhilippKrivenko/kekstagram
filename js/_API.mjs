// ОТПРАВКА ФОРМЫ
const postFormData = async (url, formElem) => {
  await fetch(url, {
    method: 'POST',
    body: new FormData(formElem),
  });
};

// ПОЛУЧЕНИЕ ДАННЫХ С СЕРВЕРА
const getUserData = async (url) => {
  const res = await fetch(url);

  return res.json();
};

export { postFormData, getUserData };
