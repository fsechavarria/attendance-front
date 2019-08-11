import React from 'react';
import { Column } from 'react-virtualized';

import { Table } from '../../../../components';

import { NAME, EMAIL, PLAN_TYPE, NEXT_BILLING_DATE, LAST_ATTENDED_CLASS, LABELS } from './constants';
import { checkHeaderRenderer, checkRenderer } from './renderers';

function ClientsListTable({ list }) {
  return (
    <Table list={list}>
      <Column dataKey="checkbox" headerRenderer={checkHeaderRenderer} cellRenderer={checkRenderer} width={50} />
      <Column dataKey={NAME} label={LABELS[NAME]} width={0} flexGrow={1} />
      <Column dataKey={EMAIL} label={LABELS[EMAIL]} width={0} flexGrow={1} />
      <Column dataKey={PLAN_TYPE} label={LABELS[PLAN_TYPE]} width={0} flexGrow={1} />
      <Column dataKey={NEXT_BILLING_DATE} label={LABELS[NEXT_BILLING_DATE]} width={0} flexGrow={1} />
      <Column dataKey={LAST_ATTENDED_CLASS} label={LABELS[LAST_ATTENDED_CLASS]} width={0} flexGrow={1} />
    </Table>
  );
}

export default ClientsListTable;
