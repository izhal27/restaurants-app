import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoritesIdb from '../../src/scripts/data/favorites-idb';

const createLikeButtonPresenterWithRestaurant = async restaurant => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: FavoritesIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
