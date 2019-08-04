import React from 'react';
import { Link } from 'react-router-dom';

import { menu } from './menu';

function Nav() {
  return (
    <div>
      {menu.map(({ id, title, path }) => (
        <Link to={path} key={id}>
          {title}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
