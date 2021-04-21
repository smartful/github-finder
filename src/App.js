import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path='/' render={props => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route path='/about' component={About} />
                <Route path='/user/:loginUsr' component={User} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
