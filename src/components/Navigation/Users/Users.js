import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import decode from 'jwt-decode';
import { connect } from 'react-redux';

import classes from './Users.module.css';

class Users extends Component {
  onLogOutHandler = () => {
    localStorage.removeItem('token');
    this.props.IsLoggedOutHandler();
  };

  render() {
    const token = localStorage.getItem('token');
    if (token && this.props.isAuth === false) {
      // const tokenInfo = decode(token);
      const { exp } = decode(token);
      if (exp < new Date().getTime() / 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        console.log('expirationDate: ', exp);
      } else {
        this.props.isLoggedInHandler();
      }
    }

    // console.log('isAuth: ', this.props.isAuth);

    let display = null;
    if (this.props.isAuth) {
      display = (
        <div className={classes.Users_content_signOut}>
          <h4>
            <NavLink to='/Profile'>
              Profile <i className='fa fa-user-circle-o' />
            </NavLink>
          </h4>
          <p onClick={() => this.onLogOutHandler()}>
            Sign Out <i className='fa fa-sign-out' />
          </p>
        </div>
      );
    } else {
      display = (
        <div className={classes.Users_content_signIn}>
          <NavLink to='/signIn'>
            Sign In <i className='fa fa-sign-in ' />
          </NavLink>
        </div>
      );
    }
    return (
      <div className={classes.Users}>
        <div className={classes.Users_content}>{display}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    isLoggedInHandler: () => {
      dispatch({ type: 'logIn' });
    },
    IsLoggedOutHandler: () => {
      dispatch({ type: 'logOut' });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
