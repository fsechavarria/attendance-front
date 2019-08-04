import * as paths from './paths';

import { generateRouteIds } from '../utils';
import * as views from '../views';

const routes = [
  {
    path: paths.HOME,
    component: views.Home
  },
  {
    path: paths.CLIENTS_LIST,
    component: views.Clients
  }
];

const routesWithIds = routes.map(route => generateRouteIds(route));

export default routesWithIds;
