import { Home, ListRestaurants, Detail, Favorites } from '../views/pages';

const routes = {
  '/': Home,
  '/restaurants': ListRestaurants,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
