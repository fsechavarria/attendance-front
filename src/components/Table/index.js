import React from 'react';

import Table from './layout';

const TableContainer = props => {
  const getRow = ({ index }) => props.list[index];

  return <Table {...props} getRow={getRow} />;
};

export default TableContainer;
