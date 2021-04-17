import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
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

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Alert alertMsg={alertMsg} />
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          showClear={users.length > 0 ? true : false}
          setAlert={setAlert}
        />
        <Users users={users} loading={loading} />
      </div>
    </Fragment>
  );
}

export default App;
