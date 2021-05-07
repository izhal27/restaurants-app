import FavoritesIdb from '../../data/favorites-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <section id="restaurants" class="container" aria-label="List of Favorites">
        <h2 class="page-title">List of Your Favorites</h2>
        <article id="restaurants-container">

        </article>
      </section>
    `;
  },

  async afterRender() {
    const favoritesContainer = document.querySelector('#restaurants-container');
    const restaurants = await FavoritesIdb.getAllRestaurants();

    const renderedRestaurant = restaurants
      .map((restaurant) => createRestaurantItemTemplate(restaurant))
      .join('');
    favoritesContainer.innerHTML = renderedRestaurant;
  },
};

export default Favorites;
