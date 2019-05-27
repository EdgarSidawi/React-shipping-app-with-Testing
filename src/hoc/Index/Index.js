import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SlideShowBuilder from '../../containers/SlideShowBuilder/SlideShowBuilder';
import Home from '../../components/Content/Home/Home';
import AboutUs from '../../components/Content/AboutUs/AboutUs';
import Tracking from '../../components/Content/Tracking/Tracking';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Content/Contact/Contact';
import Location from '../../components/Content/Location/Location';
import SignIn from '../../components/Navigation/SignIn/SignIn';
import Admin from '../../containers/Admin/Admin';
import AdminPage from '../../containers/Admin/AdminPage/AdminPage';
import Profile from '../../components/Navigation/Profile/Profile';

class Index extends Component {
  render() {
    return (
      <React.Fragment>
        <SlideShowBuilder />
        <Switch>
          <Route path='/admin/admin/login' component={Admin} />
          {this.props.adminIsLoggedIn ? (
            <Route path='/admin/admin/adminPage' component={AdminPage} />
          ) : null}
          {this.props.isLoggedIn ? (
            <Route path='/profile' component={Profile} />
          ) : null}
          <Route path='/About_us' component={AboutUs} />
          <Route path='/tracking' component={Tracking} />
          <Route path='/location' component={Location} />
          <Route path='/contact' component={Contact} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/' exact component={Home} />
          <Route
            render={() => {
              return (
                <h1 style={{ height: '400px', textAlign: 'center' }}>
                  Page Not Found
                </h1>
              );
            }}
          />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    adminIsLoggedIn: state.adminIsLoggedIn
  };
};

export default connect(mapStateToProps)(Index);
