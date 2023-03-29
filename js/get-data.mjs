import { getPhotoCards, baseUrl } from './_API.mjs';
import { onOpenMessage } from './status-message.mjs';
import { userCardsBuilder } from './card-list-dom.mjs';
import { onCardModal } from './modal-card/open-close.mjs';

document.addEventListener('DOMContentLoaded', () => {
  getPhotoCards(`${baseUrl}/data`)
    .then((userCards) => {
      userCardsBuilder(userCards);
      onCardModal(userCards);
    })
    .catch(() => {
      const errorServ = document.querySelector('#error-server').content.querySelector('.error-server').cloneNode(true);
      document.body.append(errorServ);
      const errorServButton = document.querySelector('.error-server__button');
      onOpenMessage(errorServButton);
    });
});
