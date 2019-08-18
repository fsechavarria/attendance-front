import React from 'react';
import Paper from '@material-ui/core/Paper';

import ClientsListTable from './components/ClientsListTable';

function Clients({ list, handleSelect, handleSelectAll }) {
  return (
    <Paper style={{ height: '300px', width: '100%' }}>
      <ClientsListTable list={list} handleSelect={handleSelect} handleSelectAll={handleSelectAll} />
    </Paper>
  );
}

export default Clients;
