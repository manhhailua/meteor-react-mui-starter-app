/**
 * Created by manhhailua on 1/1/17.
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
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
          title="MRM Start App"
          iconElementRight={
            <IconButton>
              <FontIcon className="material-icons">more_vert</FontIcon>
            </IconButton>
          }
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
