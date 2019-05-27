import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TrackingInfo from './TrackingInfo';

configure({ adapter: new Adapter() });

describe('<TrackingInfo/>', () => {
  it('should show ACTION REQUIRED when actionRequired is true ', () => {
    const wrapper = shallow(
      <TrackingInfo actionRequired info={[{ updatedOn: 'now' }]} />
    );
    expect(
      wrapper.contains(
        <h4 style={{ color: 'red' }}>
          ACTION REQUIRED
          <i className='fa fa-warning' style={{ color: 'red' }} />
        </h4>
      )
    ).toEqual(true);
  });

  it('should throw when actionRequired is false ', () => {
    const wrapper = shallow(<TrackingInfo info={[{ updatedOn: 'now' }]} />);
    expect(
      wrapper.contains(
        <h4 style={{ color: 'red' }}>
          ACTION REQUIRED
          <i className='fa fa-warning' style={{ color: 'red' }} />
        </h4>
      )
    ).toEqual(false);
  });

  it('should show current Status when actionRequired is false ', () => {
    const wrapper = shallow(<TrackingInfo info={[{ currentStatus: 'now' }]} />);
    expect(wrapper.contains('now')).toEqual(true);
  });
});
