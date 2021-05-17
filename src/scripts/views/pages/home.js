import RestaurantDb from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurants = {
  async render() {
    return `
      <div class="hero-container">
        <div class="hero-image">
          <div class="hero-title">
            <h1>Best Restaurants</h1>
            <h2>Daftar beberapa restoran yang ada di indonesia</h2>
          </div>
        </div>
      </div>
      <section id="restaurants" class="container" aria-label="List of Restaurants">
        <article id="restaurants-container">
        </article>
        <div class="cta">
          <a href="#/restaurants">Go to list All of Restaurants</a>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDb.listRestaurants();
    const restaurantsContainer = document.querySelector(
      '#restaurants-container'
    );
    restaurants.slice(0, 3).forEach(restaurant => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default ListRestaurants;
