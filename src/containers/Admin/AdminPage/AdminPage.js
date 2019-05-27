import React, { Component } from 'react';

import classes from './AdminPage.module.css';
import Modal from '../../../components/UI/Modal/Modal';

class AdminPage extends Component {
  state = {
    id: '',
    senderFirstName: '',
    senderLastName: '',
    senderUsername: '',
    senderPassword: '',
    recipientFirstName: '',
    recipientLastName: '',
    recipientAddress: '',
    item: '',
    dateOfShipment: '',
    estimatedDeliveryDate: '',
    trackingNumber: '',
    errorMessage: null,
    message: null,
    showTracking: null,
    trackingInfo: null,
    editTracking: false,
    editTrackingInfo: null,
    editMessage: null,
    editErrorMessage: null,
    updatedOn: '',
    location: '',
    currentStatus: '',
    time: '',
    trackingMessage: null,
    trackingErrorMessage: null,
    actionRequired: null
  };

  onChangeHandler = e => {
    // console.log(e.target.name + ' ' + e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onCreateHandler = () => {
    fetch('http://localhost:8080/admin/create', {
      method: 'PUT',
      body: JSON.stringify({
        senderFirstName: this.state.senderFirstName,
        senderLastName: this.state.senderLastName,
        senderUsername: this.state.senderUsername,
        senderPassword: this.state.senderPassword,
        recipientFirstName: this.state.recipientFirstName,
        recipientLastName: this.state.recipientLastName,
        recipientAddress: this.state.recipientAddress,
        item: this.state.item,
        dateOfShipment: this.state.dateOfShipment,
        estimatedDeliveryDate: this.state.estimatedDeliveryDate,
        trackingNumber: this.state.trackingNumber
      }),
      headers: {
        'Content-Type': ' application/json'
      }
    })
      .then(result => {
        // console.log(result.status);
        if (result.status === 422) {
          this.setState({
            errorMessage:
              'Creating Client Information Failed,Please fill all the forms',
            message: null
          });
        } else {
          this.setState({
            message: 'Client Information Created Successfully',
            errorMessage: null
          });
        }
      })
      .catch(err => {
        this.setState({
          errorMessage: 'Server cannot be reached, Please try again later'
        });
      });
  };

  onShowTrackingHandler = () => {
    fetch('http://localhost:8080/admin/tracking')
      .then(results => {
        return results.json();
      })
      .then(data => {
        // console.log('data: ', data);
        // console.log('dataFirstName: ', data.result);
        this.setState({
          trackingInfo: data.result
        });
      })
      .catch(err => {
        this.setState({
          errorMessage: 'Server cannot be reached, Please try again later',
          message: null
        });
      });
  };

  editModalHandler = () => {
    this.setState({
      editTracking: false,
      id: '',
      senderFirstName: '',
      senderLastName: '',
      senderUsername: '',
      senderPassword: '',
      recipientFirstName: '',
      recipientLastName: '',
      recipientAddress: '',
      item: '',
      dateOfShipment: '',
      estimatedDeliveryDate: '',
      trackingNumber: '',
      editErrorMessage: null,
      editMessage: null
    });
  };

  onEditHandler = trackingId => {
    fetch('http://localhost:8080/admin/tracking/' + trackingId)
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({
          id: data.result._id,
          senderFirstName: data.result.clientFirstName,
          senderLastName: data.result.clientLastName,
          senderUsername: data.result.clientUsername,
          senderPassword: '',
          recipientFirstName: data.result.recipientFirstName,
          recipientLastName: data.result.recipientLastName,
          recipientAddress: data.result.recipientAddress,
          item: data.result.item,
          dateOfShipment: data.result.dateOfShipment,
          estimatedDeliveryDate: data.result.estimatedDeliveryDate,
          trackingNumber: data.result.trackingNumber,
          editTracking: true,
          trackingMessage: null,
          trackingErrorMessage: null
        });
      })
      .catch(err => {
        this.setState({
          errorMessage: 'Server cannot be reached, Please try again later',
          message: null
        });
      });
  };

  onDeleteHandler = trackingId => {
    const updatedInfo = this.state.trackingInfo.filter(trackingElement => {
      return trackingElement.trackingId !== trackingId;
    });
    // console.log('updatedInfo: ', updatedInfo);
    fetch('http://localhost:8080/admin/tracking/' + trackingId, {
      method: 'DELETE'
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState({
          message: data.message,
          trackingInfo: updatedInfo,
          errorMessage: null
        });
      })
      .catch(err => {
        this.setState({
          errorMessage: 'Server cannot be reached, Please try again later',
          message: null
        });
      });
  };

  onActionRequiredHandler = (trackingId, actionRequired) => {
    this.setState({
      actionRequired: !actionRequired
    });
    console.log('actionRequired: ', actionRequired);
    console.log('!actionRequired: ', !actionRequired);
    fetch('http://localhost:8080/admin/action', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        trackingId: trackingId,
        actionRequired: !actionRequired
      })
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data);
        if (data.status === 422) {
          this.setState({
            errorMessage: data.message,
            message: null
          });
        }
        this.setState({
          message: data.message,
          errorMessage: null
        });
      })
      .catch(err => {
        this.setState({
          errorMessage: 'Server can not be reached, Please try again later',
          message: null
        });
      });
  };

  onUpdateProfileHandler = () => {
    fetch('http://localhost:8080/admin/update', {
      method: 'PUT',
      body: JSON.stringify({
        id: this.state.id,
        senderFirstName: this.state.senderFirstName,
        senderLastName: this.state.senderLastName,
        senderUsername: this.state.senderUsername,
        senderPassword: this.state.senderPassword,
        recipientFirstName: this.state.recipientFirstName,
        recipientLastName: this.state.recipientLastName,
        recipientAddress: this.state.recipientAddress,
        item: this.state.item,
        dateOfShipment: this.state.dateOfShipment,
        estimatedDeliveryDate: this.state.estimatedDeliveryDate
      }),
      headers: {
        'Content-Type': ' application/json'
      }
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log(data);
        if (data.status === 422) {
          this.setState({
            editErrorMessage: data.message,
            editMessage: null
          });
        }
        this.setState({
          editMessage: data.message,
          editErrorMessage: null
        });
      })
      .catch(err => {
        this.setState({
          editErrorMessage: 'Error Updating Profile'
        });
      });
  };

  onUpdateTrackingHandler = () => {
    fetch('http://localhost:8080/admin/tracking', {
      method: 'PUT',
      body: JSON.stringify({
        updatedOn: this.state.updatedOn,
        location: this.state.location,
        currentStatus: this.state.currentStatus,
        time: this.state.time,
        trackingNumber: this.state.trackingNumber
      }),
      headers: {
        'content-Type': 'application/json'
      }
    })
      .then(result => {
        return result.json();
      })
      .then(data => {
        console.log('tracking Info: ', data);
        if (data.status === 422) {
          this.setState({
            trackingErrorMessage: data.message,
            trackingMessage: null
          });
        } else {
          this.setState({
            trackingMessage: data.message,
            trackingErrorMessage: null
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let mydata = null;
    if (this.state.trackingInfo) {
      mydata = this.state.trackingInfo.map((data, index) => {
        // console.log('actionRequired: ', data.tracking.actionRequired);
        return (
          <tr key={index}>
            <td>
              {data.clientFirstName} {data.clientLastName}
            </td>
            <td>
              {data.recipientFirstName} {data.recipientLastName}
            </td>
            <td>{data.trackingNumber} </td>
            <td>
              <button onClick={() => this.onEditHandler(data.trackingId)}>
                Edit
              </button>
            </td>
            <td>
              <button onClick={() => this.onDeleteHandler(data.trackingId)}>
                Delete
              </button>
            </td>
            <td>
              <button
                style={
                  data.tracking.actionRequired
                    ? { backgroundColor: 'red' }
                    : null
                }
                onClick={() =>
                  this.onActionRequiredHandler(
                    data.trackingId,
                    data.tracking.actionRequired
                  )
                }
              >
                Action required
              </button>
            </td>
          </tr>
        );
      });
    }

    let editing = null;
    if (this.state.editTracking) {
      editing = (
        <Modal
          width=''
          show={this.state.editTracking}
          clicked={this.editModalHandler}
          custom='true'
        >
          {/* <h4>EDIT PAGE</h4>
          <hr /> */}
          <label>sender First Name:</label>
          <input
            type='text'
            name='senderFirstName'
            value={this.state.senderFirstName}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>sender Last Name:</label>
          <input
            type='text'
            name='senderLastName'
            value={this.state.senderLastName}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>sender Username :</label>
          <input
            type='text'
            name='senderUsername'
            value={this.state.senderUsername}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>sender Password:</label>
          <input
            type='text'
            name='senderPassword'
            value={this.state.senderPassword}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>Recipient First Name:</label>
          <input
            type='text'
            name='recipientFirstName'
            value={this.state.recipientFirstName}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>Recipient Last Name:</label>
          <input
            type='text'
            name='recipientLastName'
            value={this.state.recipientLastName}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>Recipient Address:</label>
          <input
            type='text'
            name='recipientAddress'
            value={this.state.recipientAddress}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>Item Shipped:</label>
          <input
            type='text'
            name='item'
            value={this.state.item}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>Date Of Shipment:</label>
          <input
            type='text'
            name='dateOfShipment'
            value={this.state.dateOfShipment}
            onChange={this.onChangeHandler}
          />
          <br />
          <label>Estimated Delivery Date:</label>
          <input
            type='text'
            name='estimatedDeliveryDate'
            value={this.state.estimatedDeliveryDate}
            onChange={this.onChangeHandler}
          />
          <br />
          <h4>
            {this.state.editErrorMessage ? this.state.editErrorMessage : null}
          </h4>
          <p>{this.state.editMessage ? this.state.editMessage : null}</p>
          <button onClick={this.onUpdateProfileHandler}>Update Profile</button>
          <br />
          <br />
          <br />
          <label> Updated On:</label>
          <input
            type='text'
            name='updatedOn'
            onChange={e => this.onChangeHandler(e)}
            required
          />
          <br />
          <label> Location:</label>
          <input
            type='text'
            name='location'
            onChange={e => this.onChangeHandler(e)}
            required
          />
          <br />
          <label> Current Status:</label>{' '}
          <input
            type='text'
            name='currentStatus'
            onChange={e => this.onChangeHandler(e)}
            required
          />
          <br />
          <label> Time:</label>{' '}
          <input
            type='text'
            name='time'
            onChange={e => this.onChangeHandler(e)}
            required
          />
          <br />
          <button onClick={this.onUpdateTrackingHandler}>
            Update Tracking Information
          </button>
          <h4>
            {this.state.trackingErrorMessage
              ? this.state.trackingErrorMessage
              : null}
          </h4>
          <p>
            {this.state.trackingMessage ? this.state.trackingMessage : null}
          </p>
        </Modal>
      );
    }

    return (
      <div className={classes.AdminPage}>
        <div className={classes.AdminPage_content}>
          <div className={classes.AdminPage_content_createClient}>
            <h3>Welcome to the Admin Page</h3>
            <hr />
            <form onSubmit={e => e.preventDefault()}>
              <fieldset>
                <legend>Sender Information</legend>
                <table>
                  <tbody>
                    <tr>
                      <td>Sender First Name:</td>
                      <td>
                        <input
                          type='text'
                          name='senderFirstName'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.senderFirstName}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Sender Last Name:</td>
                      <td>
                        <input
                          type='text'
                          name='senderLastName'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.senderLastName}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Sender Username:</td>
                      <td>
                        <input
                          type='text'
                          name='senderUsername'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.senderUsername}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Sender Password:</td>
                      <td>
                        <input
                          type='password'
                          name='senderPassword'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.senderPassword}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
              <fieldset>
                <legend>Recipient Information</legend>
                <table>
                  <tbody>
                    <tr>
                      <td>Recipient First Name:</td>
                      <td>
                        <input
                          type='text'
                          name='recipientFirstName'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.recipientFirstName}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Recipient Last Name:</td>
                      <td>
                        <input
                          type='text'
                          name='recipientLastName'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.recipientLastName}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>Recipient Address:</td>
                      <td>
                        <textarea
                          type='text'
                          name='recipientAddress'
                          rows='4'
                          cols='22'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.recipientAddress}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
              <fieldset>
                <legend>Shipment Information</legend>
                <table>
                  <tbody>
                    <tr>
                      <td>Item To Be Shipped:</td>
                      <td>
                        <input
                          type='text'
                          name='item'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.item}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Date Of Shipment:</td>
                      <td>
                        <input
                          type='text'
                          name='dateOfShipment'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.dateOfShipment}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Estimated Delivery Date:</td>
                      <td>
                        <input
                          type='text'
                          name='estimatedDeliveryDate'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.estimatedDeliveryDate}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Tracking Number</td>
                      <td>
                        <input
                          type='text'
                          name='trackingNumber'
                          onChange={e => this.onChangeHandler(e)}
                          value={this.state.trackingNumber}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </fieldset>
              <h4>
                {this.state.errorMessage ? this.state.errorMessage : null}
              </h4>
              <p>{this.state.message ? this.state.message : null}</p>
              <button
                type='submit'
                name='submit'
                onClick={this.onCreateHandler}
              >
                Create Information
              </button>
            </form>
          </div>
          <div className={classes.AdminPage_content_trackingInfo}>
            <button onClick={this.onShowTrackingHandler}>
              Show Tracking Informations
            </button>
            <table>
              <tbody>
                <tr>
                  <th>Sender Name</th>
                  <th>Recipient Name</th>
                  <th>Tracking Number</th>
                </tr>
                {mydata}
              </tbody>
            </table>
          </div>
          <div className={classes.AdminPage_content_editPage}>{editing}</div>
        </div>
      </div>
    );
  }
}

export default AdminPage;
