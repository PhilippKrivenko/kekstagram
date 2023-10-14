import { userCardsBuilder } from './card-list-dom.mjs';
import { getRandomUniqueArrayElements, sortByField, debounce } from './_utils.mjs';

function filterCardBattons(userCards) {
  const NUMBER_RANDOM_CARDS = 10;
  const RERANDER_DELAY = 1000;

  const imgFiltersForm = document.querySelector('.img-filters__form');
  const filterDefault = userCards;
  const filterRandom = getRandomUniqueArrayElements(userCards, NUMBER_RANDOM_CARDS);
  const filterDiscussed = userCards.slice().sort(sortByField('comments'));

  let filterActiveButton = document.querySelector('#filter-default');

  document.querySelector('.img-filters').classList.remove('hidden');

  function clearCardList() {
    document.querySelectorAll('.picture').forEach((elem) => elem.remove());
  }

  function onfilterCardBuilder(evt) {
    clearCardList();
    if (evt.target.closest('#filter-default')) { userCardsBuilder(filterDefault); }
    if (evt.target.closest('#filter-random')) { userCardsBuilder(filterRandom); }
    if (evt.target.closest('#filter-discussed')) { userCardsBuilder(filterDiscussed); }
  }

  function onClickFilterButton(evt) {
    filterActiveButton.classList.remove('img-filters__button--active');
    filterActiveButton = evt.target;
    filterActiveButton.classList.add('img-filters__button--active');
  }

  imgFiltersForm.addEventListener('click', onClickFilterButton);
  imgFiltersForm.addEventListener('click', debounce(onfilterCardBuilder, RERANDER_DELAY));
}

export { filterCardBattons };
