import React from 'react';

import { menu } from './menu';
import Nav from './layout';

function NavContainer() {
  return <Nav menuItems={menu} />;
}

export default NavContainer;
