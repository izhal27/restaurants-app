const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty favorites restaurants', ({ I }) => {
  I.dontSeeElement('.card');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.dontSeeElement('.card');

  I.amOnPage('/');

  I.seeElement('.restaurant-item');

  const firstRestaurant = locate('.restaurant-item').first();
  const firstRestaurantTitle = await I.grabTextFrom('.card-title');
  I.click(firstRestaurant);

  I.scrollPageToTop();

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.card');
  const likedFilmTitle = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantTitle, likedFilmTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('.card');

  I.amOnPage('/');

  I.seeElement('.restaurant-item');

  const firstRestaurant = locate('.restaurant-item').first();
  I.click(firstRestaurant);

  I.scrollPageToTop();

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');

  I.click(firstRestaurant);

  I.scrollPageToTop();

  I.seeElement('#likedButton');
  I.click('#likedButton');

  I.amOnPage('/#/favorites');

  I.dontSeeElement('.card');
});
