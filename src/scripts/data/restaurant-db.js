import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDb {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 12345,
      },
    });
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id), {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': 12345,
      },
    });
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDb;
