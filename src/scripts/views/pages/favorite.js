/* eslint-disable no-console */
/* eslint-disable array-callback-return */
import RestoFavorite from '../../data/restoFavorite';
import {
  createRestoItemTemplate,
  emptyFavorite,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
      <div id="Restaurant" class="Restaurant">
      </div>
  </div>`;
  },

  async afterRender() {
    const restaurant = await RestoFavorite.getAllRestaurant();
    // console.log(restaurant);
    const RestaurantContainer = document.querySelector('#Restaurant');

    if (restaurant.length > 0) {
      restaurant.map((resto) => {
        console.log(resto.name);
        RestaurantContainer.innerHTML += createRestoItemTemplate(resto);
      });
    } else {
      RestaurantContainer.innerHTML += emptyFavorite;
    }
  },
};

export default Favorite;
