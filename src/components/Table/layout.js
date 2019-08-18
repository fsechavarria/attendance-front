import React, { memo } from 'react';
import { Table, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';

import tableStyles from './styles';

function TableContainer({
  list = [],
  headerClassName,
  rowClassName,
  headerHeight = 50,
  rowHeight = 50,
  overscanRowCount = 20,
  children,
  className,
  getRow,
  scrollToIndex,
  onScroll,
  gridClassName,
  rowRenderer,
  onRowMouseOver,
  onRowMouseOut,
  noRowsRenderer
}) {
  const styles = tableStyles();
  return (
    <AutoSizer>
      {({ width, height }) => (
        <Table
          className={`${styles.table} ${className}`}
          headerClassName={`${styles.header} ${headerClassName}`}
          gridClassName={`${styles.grid} ${gridClassName}`}
          rowClassName={`${styles.row} ${rowClassName}`}
          width={width}
          height={height}
          headerHeight={headerHeight}
          rowHeight={rowHeight}
          rowCount={list.length}
          rowGetter={getRow}
          overscanRowCount={overscanRowCount}
          rowRenderer={rowRenderer}
          onRowMouseOver={onRowMouseOver}
          onRowMouseOut={onRowMouseOut}
          noRowsRenderer={noRowsRenderer}
          scrollToIndex={scrollToIndex}
          onScroll={onScroll}
        >
          {children}
        </Table>
      )}
    </AutoSizer>
  );
}

export default memo(TableContainer);
