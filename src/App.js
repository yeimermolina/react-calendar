import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/layout';
import Menu from './containers/menu'
import Calendar from './containers/calendar'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
              <Route path="/calendar" component= {Calendar}/>
              <Route path="/" component= {Menu}/>
              <Redirect to="/"/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
