import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserContext from './context/userContext';
import UserState from './context/userState';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import More from './components/pages/More';
import './App.css';

const App = () => {
  return (
    <UserState>
      <Router>
        <Fragment>
          <NavBar />
          <div className='app'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/more' component={More} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </UserState>
  );
};

export default App;
