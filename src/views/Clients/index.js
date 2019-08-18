import React, { useState } from 'react';

import { mockList } from './constants';
import Clients from './layout';

function ClientsContainer() {
  // Will probably refactor this to use redux in order to make the checkboxes more reusable.
  const [selected, setSelected] = useState(mockList);
  const [headerSelected, setHeaderSelected] = useState(false);

  const handleSelectAll = () => {
    const newList = selected.map(item => ({ ...item, checked: !headerSelected }));
    setSelected(newList);
    setHeaderSelected(!headerSelected);
  };

  const handleSelect = id => {
    const newList = selected.map(item => (item.id === id ? { ...item, checked: !item.checked } : item));
    setSelected(newList);
  };

  return <Clients list={selected} handleSelect={handleSelect} handleSelectAll={handleSelectAll} />;
}

export default ClientsContainer;
