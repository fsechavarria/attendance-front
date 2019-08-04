import * as paths from './paths';

import { generateRouteIds } from '../utils';
import * as views from '../views';

const routes = [
  {
    path: paths.HOME,
    component: views.Home
  }
];

const routesWithIds = routes.map(route => generateRouteIds(route));

export default routesWithIds;
