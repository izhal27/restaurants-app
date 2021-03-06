import API_ENDPOINT from '../../globals/api-endpoint';

const sanitizeHtml = text => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

const createRestaurantDetailTemplate = restaurant => `
  <div>
  <h2 class="restaurant-detail-title">${restaurant.name}</h2>
  <div>
    <img class="restaurant-picture" src="${API_ENDPOINT.IMAGE_MEDIUM(
      restaurant.pictureId
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
      .map(
        customerReview => `
        <div class="review">
        <p>${sanitizeHtml(customerReview.review)}</p>
        <h6>${sanitizeHtml(customerReview.name)}, <span class="review-date">${
          customerReview.date
        }</span></h6>
        </div>
        `
      )
      .join('')}
    </div>
  </div>
  `;

const createRestaurantItemTemplate = restaurant => `
  <a class="restaurant-item" href="${`/#/detail/${restaurant.id}`}">
    <div class="card roundborder">
      <picture>
        <source media="(max-width: 600px)" srcset="${API_ENDPOINT.IMAGE_SMALL(
          restaurant.pictureId
        )}">
        <source media="(max-width: 768px)" srcset="${API_ENDPOINT.IMAGE_MEDIUM(
          restaurant.pictureId
        )}">
        <img data-src='${API_ENDPOINT.IMAGE_LARGE(
          restaurant.pictureId
        )}' alt="restaurant-image" class="lazyload card-image roundborder"></img>
      </picture>
      <div class="detail-container">
        <h3 class="card-title">${restaurant.name}</h3>
        <h4>City: ${restaurant.city}</h4>
        <h5 class="card-sub-title">Rating: ${restaurant.rating}</h5>
        <p class="text card-description">${restaurant.description} ...</p>
      </div>
    </div>
  </a>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i> Favorite
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likedButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i> Dalam daftar Favorite
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
