/* eslint-disable arrow-parens */
import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantDetailTemplate = restaurant => `
  <div>
  <h2 class="restaurant-detail-title">${restaurant.name}</h2>
  <div>
    <img class="restaurant-picture" src="${API_ENDPOINT.IMAGE_MEDIUM(
    restaurant.pictureId,
  )}" alt="${restaurant.name}" />
    <div id="likeButtonContainer"></div>
    </div>
  </div>
  <div class="restaurant-info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    <h4>Categories</h4>
    <p>${restaurant.categories.map(category => category.name).join(', ')}</p>
    <h4>Menus</h4>
    <ul class="menus">
      <li><span class="menu-sub-title">Foods:</span> ${restaurant.menus.foods
    .map(food => food.name)
    .join(', ')}</li>
      <li><span class="menu-sub-title">Drinks:</span> ${restaurant.menus.drinks
    .map(drink => drink.name)
    .join(', ')}</li>
    </ul>
    <div class="description">
      <h4>Description</h4>
      <p>${restaurant.description}</p>
    </div>
  </div>
  <div class="customer-reviews">
    <h4>User Reviews</h4>
    <div class="container">
    ${restaurant.customerReviews
    .map(customerReview => `
        <div class="review">
        <p>${customerReview.review}</p>
        <h6>${customerReview.name}, <span class="review-date">${customerReview.date}</span></h6>
        </div>
        `)
    .join('')}
    </div>
  </div>
  `;

const createRestaurantItemTemplate = restaurant => `
  <a href="${`/#/detail/${restaurant.id}`}">
    <div class="card roundborder">
      <img
      src="${API_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}"
      alt="restaurant-image" class="card-image roundborder">
      <div class="detail-container">
        <h3 class="card-title">${restaurant.name}</h3>
        <h4>City: ${restaurant.city}</h4>
        <h5 class="card-sub-title">Rating: ${restaurant.rating}</h5>
        <p class="text card-description">${restaurant.description} ...</p>
      </div>
    </div>
  </a>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this Restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i> Favorite
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this Restaurant" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i> Favorite
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
