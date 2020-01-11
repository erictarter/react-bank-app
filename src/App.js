import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlertState from './context/alertState';
import AccounState from './context/accountState';
import Alerts from './components/alerts/Alerts';
import UserState from './context/userState';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import More from './components/pages/More';
import Account from './components/pages/Account';
import './App.css';

const App = () => {
  return (
    <AccounState>
      <UserState>
        <AlertState>
          <Router>
            <Fragment>
              <div className='app'>
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
    </AccounState>
  );
};

export default App;
