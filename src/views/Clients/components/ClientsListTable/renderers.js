import React from 'react';

export const fooRenderer = ({ rowData }) => <div>{rowData.foo}</div>;

export const barRenderer = ({ rowData }) => <div>{rowData.bar}</div>;

export const headerRenderer = ({ dataKey }) => <div>{dataKey} header</div>;
