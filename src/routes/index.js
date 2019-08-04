import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './history';
import routes from './routes';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ path, component, id }) => (
          <Route path={path} exact component={component} key={id} />
        ))}
      </Switch>
    </Router>
  );
}

export default Routes;
