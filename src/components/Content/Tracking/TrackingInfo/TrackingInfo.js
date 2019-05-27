import React from 'react';

import classes from './TrackingInfo.module.css';

const trackingInfo = props => {
  const data = props.info;
  // console.log('trackingInfo data: ', data);
  const dataInfo = data.map((el, index) => {
    return (
      <tr key={index}>
        <td>{el.updatedOn}</td>
        <td>{el.location}</td>
        <td>
          {props.actionRequired && index === 0 ? (
            <h4 style={{ color: 'red' }}>
              ACTION REQUIRED
              <i className='fa fa-warning' style={{ color: 'red' }} />
            </h4>
          ) : (
            el.currentStatus
          )}
        </td>
        <td>{el.time}</td>
      </tr>
    );
  });

  return (
    <div className={classes.trackingInfo}>
      <div className={classes.trackingInfo__content}>
        <table>
          <tbody>
            <tr>
              <th>Updated On</th>
              <th>Location</th>
              <th>Current Status</th>
              <th>Time</th>
            </tr>
            {dataInfo}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default trackingInfo;
