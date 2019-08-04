import { HOME, CLIENTS_LIST } from './constants';

import * as paths from '../../routes/paths';

export const menu = [
  {
    id: 1,
    title: HOME,
    path: paths.HOME
  },
  {
    id: 2,
    title: CLIENTS_LIST,
    path: paths.CLIENTS_LIST
  }
];
