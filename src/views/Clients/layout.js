import React from 'react';

import ClientsListTable from './components/ClientsListTable';

import { mockList } from './constants';

function Clients() {
  return (
    <div style={{ height: '300px' }}>
      <ClientsListTable list={mockList} />
    </div>
  );
}

export default Clients;
