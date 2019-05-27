import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Toolbar from './Toolbar';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Users from '../Users/Users';

configure({ adapter: new Adapter() });

describe('<Toolbar/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Toolbar />);
  });

  it('should render the Logo function', () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it('should render the NavigationItems function', () => {
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });

  it('should render the Users function', () => {
    expect(wrapper.find(Users)).toHaveLength(1);
  });
});
