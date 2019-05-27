import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavLink } from 'react-router-dom';

import UpperFooter from './UpperFooter';

configure({ adapter: new Adapter() });

describe('<UpperFooter/>', () => {
  it('should list all Navigation links', () => {
    const wrapper = shallow(<UpperFooter />);
    expect(wrapper.find(NavLink)).toHaveLength(5);
  });
});
