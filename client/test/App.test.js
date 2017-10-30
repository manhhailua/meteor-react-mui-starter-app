/**
 * Created by manhpt2 on 5/27/17.
 */

import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MuiThemeProvider } from 'material-ui/styles';
import React from 'react';
import App from '../../imports/ui/components/App';

Enzyme.configure({ adapter: new Adapter() });

describe('<App />', function () {
  let wrapper = null;

  before(function (done) {
    // All mui (material-ui) components need muiTheme context
    // So, we have to wrap our component inside a mui provider
    wrapper = mount((
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    ));

    done();
  });

  it('has been rendered', function () {
    expect(wrapper.contains(<App />)).to.equal(true);
  });

  it('has children correctly rendered', function () {
    expect(wrapper.find(App).children()).to.have.length.above(0);
  });
});
