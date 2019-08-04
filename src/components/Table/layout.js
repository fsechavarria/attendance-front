import React from 'react';
import { Table, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css';

function TableContainer({
  list = [],
  headerClassName,
  rowClassName,
  headerHeight = 50,
  rowHeight = 50,
  overscanRowCount = 10,
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
  return (
    <AutoSizer>
      {({ width, height }) => (
        <Table
          className={className}
          width={width}
          height={height}
          headerHeight={headerHeight}
          rowHeight={rowHeight}
          rowCount={list.length}
          rowGetter={getRow}
          headerClassName={headerClassName}
          rowClassName={rowClassName}
          overscanRowCount={overscanRowCount}
          rowRenderer={rowRenderer}
          onRowMouseOver={onRowMouseOver}
          onRowMouseOut={onRowMouseOut}
          noRowsRenderer={noRowsRenderer}
          scrollToIndex={scrollToIndex}
          onScroll={onScroll}
          gridClassName={gridClassName}
        >
          {children}
        </Table>
      )}
    </AutoSizer>
  );
}

export default TableContainer;
