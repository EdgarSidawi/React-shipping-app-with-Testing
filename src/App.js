import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Index from './hoc/Index/Index';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path='/' component={Index} />
      </Layout>
    );
  }
}

export default App;
