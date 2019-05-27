import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SlideShow from './SlideShow';
import SwiftSlider from 'react-swift-slider';

configure({ adapter: new Adapter() });

describe('<SlideShow/>', () => {
  it('should render the Swift Slider function', () => {
    const wrapper = shallow(<SlideShow />);
    expect(wrapper.find(SwiftSlider)).toHaveLength(1);
  });
});
