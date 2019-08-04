import React, { Fragment } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import history from './history';
import routes from './routes';

import { Nav } from '../components';

function Routes() {
  return (
    <Router history={history}>
      <Fragment>
        <Nav />
        <Container>
          <Switch>
            {routes.map(({ path, component, id }) => (
              <Route path={path} exact component={component} key={id} />
            ))}
          </Switch>
        </Container>
      </Fragment>
    </Router>
  );
}

export default Routes;
