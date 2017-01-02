/**
 * Created by manhhailua on 1/1/17.
 */

import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import './TopBar.css';

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
      <Paper>
        {/* Main Application Bar */}
        <AppBar
          title="MRM Start App"
          iconElementRight={
            <IconButton>
              <FontIcon className="material-icons">more_vert</FontIcon>
            </IconButton>
          }
          onLeftIconButtonTouchTap={() => this.toggleLeftDrawer()}
        />

        {/* Left Drawer */}
        <Drawer
          open={this.state.isLeftDrawerOpened}
          docked={false}
          onRequestChange={() => this.toggleLeftDrawer()}
        >
          {/* Main Menu */}
          <List>
            {/* User Avatar */}
            <ListItem
              disabled
              leftAvatar={
                <Avatar icon={<FontIcon className="material-icons">face</FontIcon>} />
              }
              primaryText="Your Name"
              secondaryText="yourEmail@mail.com"
            />
            <Divider />
          </List>
        </Drawer>
      </Paper>
    );
  }
}

export default TopBar;
