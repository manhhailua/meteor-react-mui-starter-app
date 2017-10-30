/**
 * Created by manhhailua on 1/5/17.
 */

import { Paper } from 'material-ui';
import React, { Component } from 'react';
import BottomBar from '../components/BottomBar';
import Content from '../components/Content';
import TopBar from '../components/TopBar';

class Order extends Component {
  render() {
    return (
      <Paper>
        <TopBar />
        <Content>
          <h1>Order Page</h1>
          <p>
            Pellentesque eu iaculis urna, sit amet suscipit tortor. Etiam maximus leo et ante
            interdum, a rutrum leo dictum. Vivamus finibus massa commodo tortor ultrices interdum.
            Mauris sed euismod risus. Cras hendrerit leo vel magna lacinia, in mattis metus
            imperdiet. Phasellus pulvinar, diam quis condimentum sagittis, nulla mi consequat
            turpis, vel lacinia arcu arcu in est. Fusce vel nulla eget mauris ultrices sodales.
          </p>
        </Content>
        <BottomBar />
      </Paper>
    );
  }
}

export default Order;
