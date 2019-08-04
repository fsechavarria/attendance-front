import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import { navStyles } from './styles';

function Nav({ menuItems }) {
  const classes = navStyles();

  return (
    <div className={classes.container}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <div className={classes.menuItemsContainer}>
            {menuItems.map(({ path, title, id }) => (
              <Link key={id} to={path} component={RouterLink} className={classes.menuItem}>
                <Typography className={classes.title} variant="h6" noWrap>
                  {title}
                </Typography>
              </Link>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
