import { userCardsBuilder } from './card-list-dom.mjs';
import { getRandomUniqueArrayElements, sortByField, debounce } from './_utils.mjs';

const filterCardBattons = (userCards) => {
  const NUMBER_RANDOM_CARDS = 10;

  const imgFiltersForm = document.querySelector('.img-filters__form');

  let filterActiveButton = document.querySelector('#filter-default');

  document.querySelector('.img-filters').classList.remove('hidden');

  const clearCardList = () => {
    document.querySelectorAll('.picture').forEach((elem) => elem.remove());
  };

  const onFilterButton = (evt) => {
    const filterDefault = userCards;
    const filterRandom = getRandomUniqueArrayElements(userCards, NUMBER_RANDOM_CARDS);
    const filterDiscussed = userCards.sort(sortByField('comments'));

    filterActiveButton.classList.remove('img-filters__button--active');
    filterActiveButton = evt.target;

    evt.target.classList.add('img-filters__button--active');

    clearCardList();

    if (evt.target.closest('#filter-default')) { userCardsBuilder(filterDefault); }
    if (evt.target.closest('#filter-random')) { userCardsBuilder(filterRandom); }
    if (evt.target.closest('#filter-discussed')) { userCardsBuilder(filterDiscussed); }
  };

  imgFiltersForm.addEventListener('click', debounce(onFilterButton, 2000));
};

export { filterCardBattons };
