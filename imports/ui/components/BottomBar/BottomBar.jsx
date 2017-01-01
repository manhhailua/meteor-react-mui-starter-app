/**
 * Created by manhhailua on 1/1/17.
 */

import React, { Component } from 'react';
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
            onTouchTap={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Shopping"
            icon={<FontIcon className="material-icons">shopping_cart</FontIcon>}
            onTouchTap={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Order"
            icon={<FontIcon className="material-icons">local_offer</FontIcon>}
            onTouchTap={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomBar;