import UrlParser from '../../routes/url-parser';
import RestaurantDb from '../../data/restaurant-db';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="container">
        <div class="restaurant-detail-container">
          <div id="restaurant" class="restaurant-detail"></div>
          <div id="spinner" class="loading show"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    const spinner = document.querySelector('#spinner');
    const restaurant = await RestaurantDb.detail(url.id);
    spinner.classList.toggle('show');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: { ...restaurant },
    });
  },
};

export default Detail;
