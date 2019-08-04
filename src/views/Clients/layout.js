import React from 'react';

import ClientsListTable from './components/ClientsListTable';

const randomList = [
  {
    foo: 'Hello',
    bar: 'World'
  },
  {
    foo: 'foo',
    bar: 'bar'
  }
];

function Clients() {
  return (
    <div style={{ height: '500px' }}>
      <ClientsListTable list={randomList} />
    </div>
  );
}

export default Clients;
