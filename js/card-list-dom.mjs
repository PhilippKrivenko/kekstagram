const userCardsBuilder = (userCards) => {
  // контейнер карточек
  const userListElement = document.querySelector('.pictures');
  // шаблон карточек
  const userCardTemplate = document.querySelector('#picture').content.querySelector('.picture');

  const userListFragment = document.createDocumentFragment();

  userCards.forEach(({ id, url, likes, comments }) => {
    const userElement = userCardTemplate.cloneNode(true);
    const userElementImg = userElement.querySelector('.picture__img');

    userElement.id = `${id}`;
    userElementImg.src = url;
    userElement.querySelector('.picture__likes').textContent = likes;
    userElement.querySelector('.picture__comments').textContent = comments.length;

    userListFragment.appendChild(userElement);
  });

  userListElement.appendChild(userListFragment);
};

export { userCardsBuilder };
