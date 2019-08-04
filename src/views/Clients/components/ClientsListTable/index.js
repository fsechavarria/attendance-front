import React from 'react';
import { Column } from 'react-virtualized';

import { Table } from '../../../../components';

import { fooRenderer, barRenderer, headerRenderer } from './renderers';

function ClientsListTable({ list }) {
  return (
    <Table list={list}>
      <Column dataKey="foo" cellRenderer={fooRenderer} headerRenderer={headerRenderer} width={0} flexGrow={1} />
      <Column dataKey="bar" cellRenderer={barRenderer} headerRenderer={headerRenderer} width={0} flexGrow={1} />
    </Table>
  );
}

export default ClientsListTable;
