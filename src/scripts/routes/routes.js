import {
  Home, Detail, Favorites,
} from '../views/pages';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorites': Favorites,
};

export default routes;
