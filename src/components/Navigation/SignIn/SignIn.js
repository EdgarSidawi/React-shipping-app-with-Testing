import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './SignIn.module.css';
import Modal from '../../UI/Modal/Modal';
// import decode from 'jwt-decode';

class SignIn extends Component {
  state = {
    formData: {
      username: { value: null, valid: false },
      password: { value: null, valid: false }
    },
    show: true,
    error: null
  };

  modalClosed = () => {
    this.setState({
      show: false
    });
  };

  onChangedHandler = (event, name) => {
    if (name === 'username') {
      let updatedFormData = { ...this.state.formData };
      let updatedFormUsername = { ...updatedFormData[name] };
      updatedFormUsername.value = event.target.value;
      updatedFormUsername.valid = this.checkValidity(updatedFormUsername.value);
      updatedFormData[name] = updatedFormUsername;
      this.setState({
        formData: updatedFormData
      });
    }
    if (name === 'password') {
      let updatedFormData = { ...this.state.formData };
      let updatedFormPassword = { ...updatedFormData[name] };
      updatedFormPassword.value = event.target.value;
      updatedFormPassword.valid = this.checkValidity(updatedFormPassword.value);
      updatedFormData[name] = updatedFormPassword;
      this.setState({
        formData: updatedFormData
      });
    }
  };

  checkValidity = value => {
    if (value.trim() !== '') {
      this.setState({
        error: null
      });
      return true;
    } else {
      this.setState({ error: 'Username and Password can not be empty!' });
      return false;
    }
  };

  signInHandler = () => {
    if (
      this.state.formData.username.valid &&
      this.state.formData.password.valid
    ) {
      //submit form

      fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.formData.username.value,
          password: this.state.formData.password.value
        })
      })
        .then(result => {
          return result.json();
        })
        .then(data => {
          if (data.status === 422) {
            this.setState({
              error: data.message
            });
          } else {
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            this.props.isLoggedInHandler();
            this.props.setUserId(data.userId);
          }
        })
        .catch(err => {
          this.setState({
            error: 'Server can not be reached, Please try again later'
          });
        });
    } else {
      this.setState({
        error: 'Invalid Username and Password!'
      });
    }
  };

  render() {
    let redirect = null;
    if (!this.state.show) {
      redirect = <Redirect to='/' />;
    }
    if (this.props.isLoggedIn) {
      redirect = <Redirect to='/' />;
    }

    return (
      <div className={classes.SignIn}>
        {redirect}
        <Modal show={this.state.show} clicked={this.modalClosed}>
          <div className={classes.SignIn_info}>
            <h3>Sign In</h3>
            <hr />
            {this.state.error !== null ? <p>{this.state.error}</p> : null}
            <form onSubmit={e => e.preventDefault()}>
              <input
                id='username'
                type='text'
                name='username'
                required
                placeholder='Username'
                onChange={event => this.onChangedHandler(event, 'username')}
              />
              <br />
              <input
                id='password'
                type='password'
                name='password'
                required
                placeholder='Password'
                onChange={event => this.onChangedHandler(event, 'password')}
              />
              <br />
              <button
                id='signIn'
                name='signIn'
                onClick={() => this.signInHandler()}
              >
                Sign In
              </button>
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  };
};
const mapDispatchToProps = dispatch => {
  return {
    isLoggedInHandler: () => {
      dispatch({ type: 'logIn' });
    },
    setUserId: userId => {
      dispatch({ type: 'setUserId', userId: userId });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
