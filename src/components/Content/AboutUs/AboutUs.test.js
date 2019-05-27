import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AboutUs from './AboutUs';
import Content from '../Content';

configure({ adapter: new Adapter() });

describe('<AboutUs/>', () => {
  it('should render the content function', () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper.find(Content)).toHaveLength(1);
  });
});
