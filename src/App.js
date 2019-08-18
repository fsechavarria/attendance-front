import React from 'react';
import CssBaseLine from '@material-ui/core/CssBaseline';

import { ErrorBoundary } from './components';

import Routes from './routes';

function App() {
  return (
    <ErrorBoundary>
      <CssBaseLine />
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
