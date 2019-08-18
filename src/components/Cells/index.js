import React from 'react';
import TableCell from '@material-ui/core/TableCell';

import './styles.scss';

/**
 * Default text renderer component.
 * @param {Object} options - Object containing the options passed to the component.
 * @param {Object} options.rowData - Object provided by react-virtualized's cellRenderer containing the current row data.
 * @param {string} options.dataKey - String representing the key of the rowData attribute to render as children.
 * @param {string} [options.className] - Class names to be passed to the component.
 * @param {string} [options.align='left'] - Align property of the TableCell component ['inherit'|'left'|'center'|'right'|'justify'].
 * @param {string} [options.padding='default'] - Padding property of the TableCell component ['default'|'checkbox'|'none'].
 * @param {string} [options.size='medium'] - Size property of the TableCell component ['small'|'medium'].
 */
const defaultTextRenderer = ({ rowData, dataKey, className, align = 'left', padding = 'default', size = 'medium' }) => (
  <TableCell component="div" variant="body" className={`cell ${className}`} align={align} size={size} padding={padding}>
    {rowData[dataKey]}
  </TableCell>
);

/**
 * Default header renderer component.
 * @param {Object} options - Object containing the options passed to the component.
 * @param {Object} options.label - Text to be rendered as label. Provided by react-virtualized's Column label prop.
 * @param {string} [options.className] - Class names to be passed to the component.
 * @param {string} [options.align='left'] - Align property of the TableCell component ['inherit'|'left'|'center'|'right'|'justify'].
 * @param {string} [options.padding='default'] - Padding property of the TableCell component ['default'|'checkbox'|'none'].
 * @param {string} [options.size='medium'] - Size property of the TableCell component ['small'|'medium'].
 */
const defaultHeaderRenderer = ({ label, className, align = 'left', padding = 'default', size = 'medium' }) => (
  <TableCell
    component="div"
    variant="head"
    className={`cell header ${className}`}
    align={align}
    size={size}
    padding={padding}
  >
    {label}
  </TableCell>
);

export default { defaultTextRenderer, defaultHeaderRenderer };
