import React from 'react';
import { Column } from 'react-virtualized';

import { Table, renderers } from '../../../../components';

import { NAME, EMAIL, PLAN_TYPE, NEXT_BILLING_DATE, LAST_ATTENDED_CLASS, LABELS } from './constants';
import { checkHeaderRenderer, checkRenderer } from './renderers';

function ClientsListTable({ list }) {
  return (
    <Table list={list}>
      <Column dataKey="checkbox" headerRenderer={checkHeaderRenderer} cellRenderer={checkRenderer} width={50} />
      <Column
        dataKey={NAME}
        headerRenderer={renderers.defaultHeaderRenderer}
        label={LABELS[NAME]}
        cellRenderer={renderers.defaultTextRenderer}
        width={0}
        flexGrow={1}
      />
      <Column
        dataKey={EMAIL}
        headerRenderer={renderers.defaultHeaderRenderer}
        label={LABELS[EMAIL]}
        cellRenderer={renderers.defaultTextRenderer}
        width={0}
        flexGrow={1}
      />
      <Column
        dataKey={PLAN_TYPE}
        headerRenderer={renderers.defaultHeaderRenderer}
        label={LABELS[PLAN_TYPE]}
        cellRenderer={renderers.defaultTextRenderer}
        width={0}
        flexGrow={1}
      />
      <Column
        dataKey={NEXT_BILLING_DATE}
        headerRenderer={renderers.defaultHeaderRenderer}
        label={LABELS[NEXT_BILLING_DATE]}
        cellRenderer={renderers.defaultTextRenderer}
        width={0}
        flexGrow={1}
      />
      <Column
        dataKey={LAST_ATTENDED_CLASS}
        headerRenderer={renderers.defaultHeaderRenderer}
        label={LABELS[LAST_ATTENDED_CLASS]}
        cellRenderer={renderers.defaultTextRenderer}
        width={0}
        flexGrow={1}
      />
    </Table>
  );
}

export default ClientsListTable;
