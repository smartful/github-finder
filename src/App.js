import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
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

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Search />
        <Users users={users} loading={loading} />
      </div>
    </Fragment>
  );
}

export default App;
