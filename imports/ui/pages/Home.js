/**
 * Created by manhhailua on 1/5/17.
 */

import Paper from 'material-ui/Paper';
import React, { Component } from 'react';
import BottomBar from '../components/BottomBar';
import Content from '../components/Content';
import TopBar from '../components/TopBar';

class Home extends Component {

  render() {
    return (
      <Paper>
        <TopBar />
        <Content>
          <h1>Home Page</h1>
          <p>Welcome to a meteor stater app.</p>
          <p>I am using React and Material-UI to be what being displayed.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac purus sed justo
            bibendum ornare. Sed ultricies, lectus id hendrerit aliquet, velit odio facilisis ipsum,
            at maximus arcu metus quis mauris. Nulla elementum lorem eu tellus auctor porta.
            Maecenas iaculis maximus mi eget congue. In ac mauris consectetur, auctor lectus sed,
            vestibulum arcu. Integer vel nisi mattis, tincidunt ipsum ac, vehicula urna. Maecenas
            dapibus lorem sit amet ante aliquam, sed dignissim nulla laoreet. Integer vestibulum
            pulvinar efficitur. Vivamus in lobortis nisi. Suspendisse vel velit mattis, gravida
            metus eu, tincidunt odio.</p>
          <p>Vivamus dignissim libero interdum mauris efficitur, sit amet fermentum lacus ornare.
            Phasellus tempor leo vulputate mi faucibus vehicula. Suspendisse potenti. Donec sit amet
            vehicula lectus, vitae volutpat nulla. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Suspendisse varius fringilla odio non facilisis. Ut blandit felis mauris,
            et maximus eros vulputate eu. Nullam id ornare leo. Vivamus id purus eget nisl pretium
            facilisis. Maecenas molestie augue enim. Nam sit amet fermentum risus. Mauris pharetra
            metus sed ligula congue auctor. Mauris scelerisque massa enim, ut consequat dui laoreet
            sed. Ut feugiat leo arcu. Vestibulum congue orci nec dolor eleifend rhoncus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.</p>
          <p>Fusce tincidunt, quam nec semper accumsan, quam leo interdum elit, mattis luctus nibh
            erat ac eros. Morbi porta, purus sed commodo vestibulum, nulla elit mattis urna, et
            vestibulum quam orci quis nulla. Nullam nec viverra enim, sit amet ornare nunc.
            Curabitur lacinia accumsan massa, vel lacinia nibh. Nulla eget lectus nibh. Aenean
            tempus aliquet tellus eget sodales. Vestibulum in suscipit felis, at lobortis arcu.
            Aliquam dui est, molestie ullamcorper semper dapibus, convallis quis urna. Fusce id
            tellus sit amet nulla consectetur facilisis. Nulla semper justo et diam tristique
            vestibulum.</p>
          <p>- Manh Pham -</p>
          <p>manhhailua@gmail.com</p>
        </Content>
        <BottomBar />
      </Paper>
    );
  }

}

export default Home;
