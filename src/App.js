import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import AuthRoute from './components/auth/AuthRoute'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import AccountDetail from './components/dashboard/AccountDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <Navbar />
          <Switch>
            <AuthRoute exact path="/" component={Dashboard} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/accounts/:id" component={AccountDetail} />
          </Switch>          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
