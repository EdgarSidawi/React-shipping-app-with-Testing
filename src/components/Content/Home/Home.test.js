import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Home from './Home';
import Content from '../Content';

configure({ adapter: new Adapter() });

describe('<Home/>', () => {
  it('should render the content function', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find(Content)).toHaveLength(1);
  });
});
