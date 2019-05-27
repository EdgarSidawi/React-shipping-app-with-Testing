import React, { Component } from 'react';

import classes from './QuickMessage.module.css';
import { TextField } from '@material-ui/core';

class QuickMessage extends Component {
  state = {
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    phoneNumber: '',
    phoneNumberError: '',
    message: '',
    messageError: ''
  };

  onChangeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      nameError: '',
      emailError: '',
      phoneNumberError: '',
      messageError: ''
    };

    if (this.state.name.length < 5) {
      isError = true;
      errors.nameError = 'Name should be atleast 5 characters long';
    }

    if (this.state.email.indexOf('@') === -1) {
      isError = true;
      errors.emailError = 'Please enter the correct email';
    }

    if (this.state.phoneNumber.length < 10) {
      isError = true;
      errors.phoneNumberError =
        'Phone number should be atleast 10 characters long';
    }
    if (this.state.message.length < 10) {
      isError = true;
      errors.messageError = 'Message should be atleast 10 characters long';
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors
      });
    }
    return isError;
  };

  onSubmitHandler = () => {
    const err = this.validate();
    if (err === false) {
      //clear form
      this.setState({
        ...this.state,
        name: '',
        email: '',
        phoneNumber: '',
        message: ''
      });
    }
  };

  render() {
    let nameError = {};
    if (this.state.nameError !== '') {
      nameError = { error: true, helperText: this.state.nameError };
    }
    let emailError = {};
    if (this.state.emailError !== '') {
      emailError = { error: true, helperText: this.state.emailError };
    }
    let phoneNumberError = {};
    if (this.state.phoneNumberError !== '') {
      phoneNumberError = {
        error: true,
        helperText: this.state.phoneNumberError
      };
    }
    let messageError = {};
    if (this.state.messageError !== '') {
      messageError = { error: true, helperText: this.state.messageError };
    }

    return (
      <div className={classes.quickMessage}>
        <div className={classes.quickMessage__content}>
          <fieldset>
            <legend>Quick Message</legend>
            <form onSubmit={e => e.preventDefault()}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>
                        Name : <span>*</span>
                      </label>
                    </td>
                    <td>
                      <TextField
                        type='text'
                        name='name'
                        required
                        label='Full Name'
                        value={this.state.name}
                        {...nameError}
                        // error='false'
                        // {this.state.name ? error: null}
                        // helperText={this.state.nameError}
                        onChange={event => this.onChangeHandler(event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>
                        Email : <span>*</span>
                      </label>
                    </td>
                    <td>
                      <TextField
                        type='email'
                        name='email'
                        required
                        value={this.state.email}
                        label='Your Email'
                        {...emailError}
                        onChange={event => this.onChangeHandler(event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Phone Number :</label>
                    </td>
                    <td>
                      <TextField
                        type='Number'
                        name='phoneNumber'
                        minLength='10'
                        label='Your Phone number'
                        value={this.state.phoneNumber}
                        {...phoneNumberError}
                        onChange={event => this.onChangeHandler(event)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>
                        Message : <span>*</span>
                      </label>
                    </td>
                    <td>
                      <TextField
                        name='message'
                        rows='10'
                        cols='63'
                        required
                        value={this.state.message}
                        minLength='10'
                        {...messageError}
                        placeholder='not less than 10 characters'
                        onChange={event => this.onChangeHandler(event)}
                        multiline={true}
                        // rows={10}
                        fullWidth
                      />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <button onClick={this.onSubmitHandler} name='submit'>
                        SUBMIT
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default QuickMessage;
