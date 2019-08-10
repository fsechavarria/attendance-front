import * as paths from './paths';

import * as views from '../views';

const routes = [
  {
    id: 1,
    path: paths.HOME,
    component: views.Home
  },
  {
    id: 2,
    path: paths.CLIENTS_LIST,
    component: views.Clients
  }
];

export default routes;
