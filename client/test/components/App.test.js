/**
 * Created by manhpt2 on 5/27/17.
 */

import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import { MuiThemeProvider } from 'material-ui/styles';
import React from 'react';
import App from '../../../imports/ui/components/App';

// Attach chai-enzyme assertion methods
chai.use(chaiEnzyme());

describe('<App />', function () {
  let wrapper = null;

  before(function (done) {
    // All mui (material-ui) components need muiTheme context
    // So, we have to wrap our component inside a mui provider
    wrapper = mount(
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>,
    );

    done();
  });

  it('has been rendered', function () {
    expect(wrapper).to.contain(<App />);
  });

  it('has children correctly rendered', function () {
    expect(wrapper.find(App).children()).to.have.length.above(0);
  });
});
