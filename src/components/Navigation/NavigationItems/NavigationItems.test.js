import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavLink } from 'react-router-dom';

import NavigationItems from './NavigationItems';

configure({ adapter: new Adapter() });

describe('<NavigationItems/>', () => {
  it('should list all Navigation links', () => {
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavLink)).toHaveLength(5);
  });
});
