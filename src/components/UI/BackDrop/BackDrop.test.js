import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BackDrop from './BackDrop';
import classes from './BackDrop.module.css';

configure({ adapter: new Adapter() });

describe('<BackDrop/>', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<BackDrop />);
  });
  it('should render a div if show prop is true', () => {
    let props = { clicked: true };
    wrapper.setProps({ show: true, clicked: true });
    expect(
      wrapper.contains(
        <div className={classes.backDrop} onClick={props.clicked} />
      )
    ).toEqual(true);
  });

  it('should return false if show is false', () => {
    let props = { clicked: true };
    expect(
      wrapper.contains(
        <div className={classes.backDrop} onClick={props.clicked} />
      )
    ).toEqual(false);
  });
});
