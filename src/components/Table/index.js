import React, { PureComponent } from 'react';

import Table from './layout';

class TableContainer extends PureComponent {
  getRow = ({ index }) => this.props.list[index];

  render() {
    return <Table {...this.props} getRow={this.getRow} />;
  }
}

export default TableContainer;
