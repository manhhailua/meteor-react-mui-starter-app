/**
 * Created by manhhailua on 1/2/17.
 */

import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class LeftDrawer extends Component {

  static propTypes = {
    isOpened: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <Drawer open={this.props.isOpened} docked={false}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    );
  }
}

export default LeftDrawer;
