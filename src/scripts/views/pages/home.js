import DbRestoSource from '../../data/source';
import {
  createRestoItemTemplate,
  createHeroImage,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="jumbotron" id="jumbotron">
       
      </div>

      <div class="content">
          <h2 class="content__heading">Explore Restaurant</h2>
          <div id="Restaurant" class="Restaurant">
          </div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurant = await DbRestoSource.homeResto();
    const jumbotronContainer = document.querySelector('#jumbotron');
    jumbotronContainer.innerHTML += createHeroImage;
    const RestaurantContainer = document.querySelector('#Restaurant');
    restaurant.forEach((resto) => {
      RestaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
