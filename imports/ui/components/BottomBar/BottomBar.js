/**
 * Created by manhhailua on 1/1/17.
 */

import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './BottomBar.scss';

class BottomBar extends Component {

  static propTypes = {
    history: PropTypes.object,
  };

  static defaultProps = {
    history: {},
  };

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
              this.props.history.push('/');
            }}
          />
          <BottomNavigationItem
            label="Shopping"
            icon={<FontIcon className="material-icons">shopping_cart</FontIcon>}
            onTouchTap={() => {
              this.select(1);
              this.props.history.push('/shopping');
            }}
          />
          <BottomNavigationItem
            label="Order"
            icon={<FontIcon className="material-icons">local_offer</FontIcon>}
            onTouchTap={() => {
              this.select(2);
              this.props.history.push('/order');
            }}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default withRouter(BottomBar);
