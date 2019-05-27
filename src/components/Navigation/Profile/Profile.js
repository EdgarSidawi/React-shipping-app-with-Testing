import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Modal from '../../UI/Modal/Modal';
import classes from './Profile.module.css';

class Profile extends Component {
  state = {
    profileInfo: '',
    actionRequired: null,
    currentStatus: null,
    error: null,
    show: true
  };

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    // console.log('userId: ' + userId);
    fetch('http://localhost:8080/tracking/profile/' + userId, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        // console.log('data: ', data);
        // console.log('data-action: ', data.result.tracking);
        if (data.status === 422 || data.status === 401) {
          this.setState({
            error: data.message
          });
        }
        this.setState({
          profileInfo: data.result,
          actionRequired: data.result.tracking.actionRequired,
          currentStatus: data.result.tracking.currentStatus
        });
      })
      .catch(err => {
        this.setState({
          error: 'Server is down, Please try again later'
        });
      });
  };

  modalClosedHandler = () => {
    this.setState({
      show: false
    });
  };

  render() {
    let redirect = null;
    if (!this.state.show) {
      redirect = <Redirect to='/' />;
    }
    return (
      <div className={classes.Profile}>
        {redirect}
        <div className={classes.Profile_content}>
          <Modal
            show={this.state.show}
            clicked={this.modalClosedHandler}
            custom
          >
            <h3>{this.state.error ? this.state.error : null}</h3>
            <p>
              Welcome{' '}
              <b>
                {this.state.profileInfo.clientFirstName}{' '}
                {this.state.profileInfo.clientLastName}
              </b>
            </p>
            <h3>CONSIGNMENT DETAILS</h3>
            <hr />
            <table>
              <tbody>
                <tr>
                  <td>ITEM SHIPPED: </td>
                  <td>{this.state.profileInfo.item}</td>
                </tr>
                <tr>
                  <td>DATE OF SHIPMENT: </td>
                  <td>{this.state.profileInfo.dateOfShipment}</td>
                </tr>
                <tr>
                  <td>ESTIMATED DELIVERY DATE: </td>
                  <td>{this.state.profileInfo.estimatedDeliveryDate}</td>
                </tr>
                <tr>
                  <td>RECIPIENT NAME: </td>
                  <td>
                    {this.state.profileInfo.recipientFirstName}{' '}
                    {this.state.profileInfo.recipientLastName}
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>RECIPIENT ADDRESS: </label>
                  </td>
                  <td>
                    <textarea
                      value={this.state.profileInfo.recipientAddress}
                      cols='25'
                      rows='3'
                      readOnly
                    />
                  </td>
                </tr>
                <tr>
                  <td>TRACKING NUMBER: </td>
                  <td>{this.state.profileInfo.trackingNumber}</td>
                </tr>
                <tr>
                  <td>CURRENT STATUS: </td>
                  <td>
                    {this.state.actionRequired ? (
                      <h4 style={{ color: 'red' }}>
                        ACTION REQUIRED{' '}
                        <i className='fa fa-warning' style={{ color: 'red' }} />
                      </h4>
                    ) : (
                      <h4 style={{ color: 'green' }}>
                        {this.state.currentStatus}
                      </h4>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Profile;
