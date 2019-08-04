import { generateRouteIds } from '../utils';
import views from '../views';

const routes = [
  {
    path: '/',
    component: views.Home
  }
];

export default routes.map(route => generateRouteIds(route));
