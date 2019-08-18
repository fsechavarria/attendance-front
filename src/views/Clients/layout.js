import React from 'react';
import Paper from '@material-ui/core/Paper';

import ClientsListTable from './components/ClientsListTable';

import { mockList } from './constants';

function Clients() {
  return (
    <Paper style={{ height: '300px', width: '100%' }}>
      <ClientsListTable list={mockList} />
    </Paper>
  );
}

export default Clients;
