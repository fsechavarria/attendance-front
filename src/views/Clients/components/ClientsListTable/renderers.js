import React from 'react';

import { CheckBox } from '../../../../components';

export const checkHeaderRenderer = handleSelectAll => {
  return <CheckBox onClick={handleSelectAll} />;
};

export const checkRenderer = (handleClick, { rowData }) => {
  return <CheckBox onClick={handleClick.bind(this, rowData.id)} checked={rowData.checked || false} />;
};
