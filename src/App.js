import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import About from './components/pages/About';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [alertMsg, setAlertMsg] = useState(null);
  
  useEffect(() => {
    const urlHost = `https://api.github.com/users`;
    const url = `${urlHost}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get(url);
      setUsers(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const searchUsers = async (text) => {
    const urlHost = `https://api.github.com/search/users`;
    const url = `${urlHost}?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    setLoading(true);
    const res = await axios.get(url);
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  const setAlert = (message, type) => {
    setAlertMsg({ message, type });
    setTimeout(() => setAlertMsg(null), 5000);
  };

  const getUser = async (username) => {
    const urlHost = `https://api.github.com/users/`;
    const url = `${urlHost}${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    setLoading(true);
    const res = await axios.get(url);
    setUser(res.data);
    setLoading(false);
  }

  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Alert alertMsg={alertMsg} />
          <Switch>
            <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )}
            />
            <Route path='/about' component={About} />
            <Route path='/user/:loginUsr' >
              <User
                getUser={getUser}
                user={user}
                loading={loading}
              />
            </Route>
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
