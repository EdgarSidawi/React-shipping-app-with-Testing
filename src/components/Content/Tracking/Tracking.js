import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

import classes from './Tracking.module.css';
import TrackingInfo from './TrackingInfo/TrackingInfo';
import Spinner from '../../UI/Spinner/Spinner';

class Tracking extends Component {
  state = {
    trackingInfo: null,
    trackingNumber: '',
    actionRequired: null,
    loading: false,
    message: null
  };

  onChangeHandler = e => {
    this.setState({
      ...this.state,
      trackingNumber: e.target.value
    });
  };

  validation = value => {
    let hasError = false;
    if (value.length < 10) {
      hasError = true;
    }
    return hasError;
  };

  onTrackingHandler = e => {
    e.preventDefault();
    this.setState({
      loading: true
    });

    const error = this.validation(this.state.trackingNumber);
    if (error) {
      this.setState({
        message:
          'Entered Information is incorrect. Please correct it and try again',
        loading: false
      });
    } else {
      const trackingNumber = this.state.trackingNumber;
      fetch('http://localhost:8080/tracking/tracking', {
        method: 'POST',
        body: JSON.stringify({
          trackingNumber: trackingNumber
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(resData => {
          // console.log('resData: ' + resData.message);
          // console.log('resData: ' + resData);
          // console.log('resData: ' + resData.status);
          // console.log('tracking: ' + resData.tracking);
          let message = null;
          if (resData.status === 422) {
            message = resData.message;
          }
          this.setState({
            trackingInfo: resData.tracking.reverse(),
            actionRequired: resData.actionRequired,
            loading: false,
            message: message
          });
        })
        .catch(err => {
          this.setState({
            message:
              'Entered Information is incorrect. Please correct it and try again',
            loading: false
          });
        });
    }
  };

  render() {
    let trackingInfo = null;
    if (this.state.trackingInfo) {
      trackingInfo = (
        <TrackingInfo
          info={this.state.trackingInfo}
          actionRequired={this.state.actionRequired}
        />
      );
    }

    return (
      <div className={classes.Content}>
        <div className={classes.tracking}>
          <h3> TRACK YOUR GOODS</h3>
          <hr />
          <form>
            <TextField
              type='text'
              // placeholder='Tracking Number'
              label='Tracking Number'
              name='trackingNumber'
              onChange={e => this.onChangeHandler(e)}
            />
            <button
              type='submit'
              name='submit'
              onClick={this.onTrackingHandler}
            >
              TRACK
            </button>
          </form>
          {this.state.message ? <p>{this.state.message}</p> : trackingInfo}
          <div className={classes.Spinner}>
            {this.state.loading ? <Spinner /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Tracking;
