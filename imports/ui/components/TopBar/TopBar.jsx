/**
 * Created by manhhailua on 1/1/17.
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from '../LeftDrawer';

class TopBar extends Component {

  constructor() {
    super();

    this.state = {
      isLeftDrawerOpened: false,
    };
  }

  toggleLeftDrawer() {
    this.setState({ isLeftDrawerOpened: !this.state.isLeftDrawerOpened });
  }

  render() {
    return (
      <Paper zDepth={0}>
        <AppBar
          title="App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={() => this.toggleLeftDrawer()}
        />
        <LeftDrawer
          isOpened={this.state.isLeftDrawerOpened}
        />
      </Paper>
    );
  }
}

export default TopBar;
