import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Contact from './Contact';
import ContactUs from './ContactUs/ContactUs';
import QuickMessage from './QuickMessage/QuickMessage';

configure({ adapter: new Adapter() });

describe('<Contact/>', () => {
  it('should render the ContactUs function', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find(ContactUs)).toHaveLength(1);
  });

  it('should render the QuickMessage function', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find(QuickMessage)).toHaveLength(1);
  });
});
