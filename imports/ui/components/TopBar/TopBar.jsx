/**
 * Created by manhhailua on 1/1/17.
 */

import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class TopBar extends Component {

  render() {
    return (
      <AppBar
        title="App"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default TopBar;
