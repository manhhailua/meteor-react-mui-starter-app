/**
 * Created by manhhailua on 1/2/17.
 */

import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Content.scss';

class Content extends Component {

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element,
    ]).isRequired,
  };

  render() {
    return (
      <Paper className="content">
        {this.props.children}
      </Paper>
    );
  }
}

export default Content;
