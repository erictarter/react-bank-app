import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlertState from './context/alertState';
import Alerts from './components/alerts/Alerts';
import UserState from './context/userState';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import More from './components/pages/More';
import Account from './components/pages/Account';
import './App.css';

const App = () => {
  return (
    <UserState>
      <AlertState>
        <Router>
          <Fragment>
            <NavBar />
            <div className='app'>
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/account' component={Account} />
                <Route exact path='/more' component={More} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </UserState>
  );
};

export default App;
