import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import UserWasteList from './pages/UserWasteList';
import WasteList from './pages/WasteList'
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AuthProvider from './providers/AuthProvider';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/private" component={Private} />
              <PrivateRoute path="/challenge/waste/add" component={WasteList} />
              <PrivateRoute path="/challenge/waste" component={UserWasteList} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
