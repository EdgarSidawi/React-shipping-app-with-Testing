import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from './Admin.module.css';

class Admin extends Component {
  state = {
    username: '',
    password: '',
    message: null
  };

  onChangeHandler = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  onSubmitHandler = e => {
    if (
      this.state.username === 'romantibuai' &&
      this.state.password === 'junior'
    ) {
      this.props.adminLogInHandler();
    } else {
      this.setState({
        ...this.state,
        message: 'Username and Password is incorrect'
      });
    }
  };

  render() {
    let redirect = null;
    if (this.props.adminLoggedIn) {
      redirect = <Redirect to='/admin/admin/adminPage' />;
    }
    console.log(this.props.adminLoggedIn);

    return (
      <div className={classes.Admin}>
        <div className={classes.Admin_content}>
          {redirect}

          <h3>Welcome to the Admin Login Page</h3>
          <hr />
          <p>{this.state.message ? this.state.message : null}</p>
          <form onSubmit={e => e.preventDefault()}>
            <TextField
              type='text'
              label='Username'
              name='username'
              value={this.state.username}
              required
              onChange={e => this.onChangeHandler(e)}
            />
            <br />
            <TextField
              type='password'
              label='Password'
              name='password'
              value={this.state.password}
              required
              onChange={e => this.onChangeHandler(e)}
            />
            <br />
            <button
              type='submit'
              name='submit'
              onClick={e => this.onSubmitHandler(e)}
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    adminLoggedIn: state.adminIsLoggedIn
  };
};
const mapDipatchToProps = dispatch => {
  return {
    adminLogInHandler: () => {
      dispatch({ type: 'setAdminIsLoggedIn' });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(Admin);
