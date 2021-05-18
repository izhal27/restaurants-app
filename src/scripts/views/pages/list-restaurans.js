import RestaurantDb from '../../data/restaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurants = {
  async render() {
    return `
      <section id="restaurants" class="container" aria-label="List of Restaurants">
        <h2 class="page-title">List of Restaurants</h2>
        <div id="spinner" class="loading show"></div>
        <article id="restaurants-container">

        </article>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector(
      '#restaurants-container'
    );
    const spinner = document.querySelector('#spinner');
    const restaurants = await RestaurantDb.listRestaurants();
    const renderedRestaurant = restaurants
      .map(restaurant => createRestaurantItemTemplate(restaurant))
      .join('');
    restaurantsContainer.innerHTML = renderedRestaurant;
    spinner.classList.toggle('show');
  },
};

export default ListRestaurants;
