/**
 * Created by manhhailua on 1/1/17.
 */

import { AppBar, Avatar, Divider, Drawer, FontIcon, IconButton, Paper } from 'material-ui';
import { List, ListItem } from 'material-ui/List';
import React, { Component } from 'react';
import './TopBar.scss';

class TopBar extends Component {
  constructor() {
    super();

    this.state = {
      isLeftDrawerOpened: false,
    };
  }

  toggleLeftDrawer = () => {
    this.setState({ isLeftDrawerOpened: !this.state.isLeftDrawerOpened });
  };

  render() {
    return (
      <Paper>
        {/* Main Application Bar */}
        <AppBar
          title="MRM Starter App"
          iconElementRight={
            <IconButton>
              <FontIcon className="material-icons">more_vert</FontIcon>
            </IconButton>
          }
          onLeftIconButtonTouchTap={this.toggleLeftDrawer}
        />

        {/* Left Drawer */}
        <Drawer
          open={this.state.isLeftDrawerOpened}
          docked={false}
          onRequestChange={this.toggleLeftDrawer}
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
              secondaryText="your-email@mail.com"
            />
            <Divider />

            {/* Main Menu's Items */}
            <ListItem
              primaryText="List Item"
              leftIcon={<FontIcon className="material-icons">inbox</FontIcon>}
            />
            <ListItem
              primaryText="List Item"
              leftIcon={<FontIcon className="material-icons">local_offer</FontIcon>}
            />
            <ListItem
              primaryText="List Item"
              leftIcon={<FontIcon className="material-icons">shopping_cart</FontIcon>}
            />
            <ListItem
              primaryText="List Item"
              leftIcon={<FontIcon className="material-icons">grade</FontIcon>}
            />
            <Divider />

            {/* Secondary Menu's Items */}
            <ListItem
              primaryText="Settings"
              leftIcon={<FontIcon className="material-icons">settings</FontIcon>}
            />
            <ListItem
              primaryText="Help & feedback"
              leftIcon={<FontIcon className="material-icons">help</FontIcon>}
            />
            <ListItem
              primaryText="Logout"
              leftIcon={<FontIcon className="material-icons">remove_circle_outline</FontIcon>}
            />
          </List>
        </Drawer>
      </Paper>
    );
  }
}

export default TopBar;
