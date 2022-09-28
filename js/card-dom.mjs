import { createUserCard } from "./create-random-user-card.mjs";
import { shuffleArray } from "./_utils.mjs";

const NUMBER_OF_CARDS = 25;

const userCards = (shuffleArray(new Array(NUMBER_OF_CARDS)
  .fill(null)
  .map((current, index) => createUserCard(index))));

const userListElement = document.querySelector('.pictures');
const userCardTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userListFragment = document.createDocumentFragment();

userCards.forEach(({ url, description, likes, comments }) => {
  const userElement = userCardTemplate.cloneNode(true);

  userElement.querySelector('.picture__img').src = url;
  userElement.querySelector('.picture__img').alt = description;
  userElement.querySelector('.picture__likes').textContent = likes;
  userElement.querySelector('.picture__comments').textContent = comments.length;

  userListFragment.appendChild(userElement);
})

userListElement.appendChild(userListFragment);
