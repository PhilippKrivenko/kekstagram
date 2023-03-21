// ОТПРАВКА ФОРМЫ
const postFormData = async (url, formElem) => {
  const res = await fetch(url, {
    method: 'POST',
    body: new FormData(formElem),
  });

  return await res.text();
};

export { postFormData };
