/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import UrlParser from '../../routes/url-parser';
import DbRestoSource from '../../data/source';
import {
  createRestoDetailTemplate,
  createLikeButtonTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="Restaurant-detail" class="Restaurant-detail"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await DbRestoSource.detailResto(url.id);
    console.log(resto);

    const restoContainer = document.querySelector('#Restaurant-detail');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        pictureId: resto.restaurant.pictureId,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
