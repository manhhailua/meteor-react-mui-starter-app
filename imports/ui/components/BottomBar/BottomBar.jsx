/**
 * Created by manhhailua on 1/1/17.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import './BottomBar.css';

class BottomBar extends Component {

  constructor() {
    super();

    this.state = {
      selectedIndex: 0,
    };
  }

  select(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    return (
      <Paper className="bottom-bar" zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={<FontIcon className="material-icons">home</FontIcon>}
            onTouchTap={() => {
              this.select(0);
              browserHistory.push('/');
            }}
          />
          <BottomNavigationItem
            label="Shopping"
            icon={<FontIcon className="material-icons">shopping_cart</FontIcon>}
            onTouchTap={() => {
              this.select(1);
              browserHistory.push('/shopping');
            }}
          />
          <BottomNavigationItem
            label="Order"
            icon={<FontIcon className="material-icons">local_offer</FontIcon>}
            onTouchTap={() => {
              this.select(2);
              browserHistory.push('/order');
            }}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomBar;
