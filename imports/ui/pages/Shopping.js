/**
 * Created by manhhailua on 1/5/17.
 */

import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import BottomBar from '../components/BottomBar';
import Content from '../components/Content';
import TopBar from '../components/TopBar';

class Shopping extends Component {

  render() {
    return (
      <Paper>
        <TopBar />
        <Content>
          <h1>Shopping Page</h1>
          <p>Donec vel nulla sed dolor pretium aliquam a id risus. In id facilisis libero, ac
            sagittis orci. Suspendisse ac nulla vel turpis vestibulum condimentum. Curabitur laoreet
            dapibus ligula, id fringilla augue dignissim ut. Morbi congue nisi quis nulla tincidunt
            rutrum. Etiam imperdiet urna id justo gravida interdum. Praesent eu mi dictum, posuere
            risus eu, vestibulum neque.</p>
        </Content>
        <BottomBar />
      </Paper>
    );
  }

}

export default Shopping;
