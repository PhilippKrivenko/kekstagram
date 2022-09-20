import { createUserCard } from "./create-random-user-card.mjs";
import { shuffleArray } from "./_utils.mjs";

const NAMBER_OF_CARDS = 25;

const userCards = new Array(NAMBER_OF_CARDS).fill(null).map((current, index) => createUserCard(index));
const shuffledUserCards = shuffleArray(userCards);

const userListElement = document.querySelector('.pictures');
const userCardTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userListFragment = document.createDocumentFragment();

shuffledUserCards.forEach(({ url, description, likes, comments }) => {
  const userElement = userCardTemplate.cloneNode(true);

  userElement.querySelector('.picture__img').src = url;
  userElement.querySelector('.picture__img').alt = description;
  userElement.querySelector('.picture__likes').textContent = likes;
  userElement.querySelector('.picture__comments').textContent = comments.length;

  userListFragment.appendChild(userElement);
})

userListElement.appendChild(userListFragment);
