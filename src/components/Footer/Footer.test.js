import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';
import LowerFooter from './LowerFooter/LowerFooter';
import UpperFooter from './UpperFooter/UpperFooter';

configure({ adapter: new Adapter() });

describe('<Footer/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('should contain one lowerFooter component', () => {
    expect(wrapper.find(LowerFooter)).toHaveLength(1);
  });

  it('should contain one upperFooter component', () => {
    expect(wrapper.find(UpperFooter)).toHaveLength(1);
  });
});
