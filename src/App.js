import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await axios.get('https://api.github.com/users');
      setUsers(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Users users={users} loading={loading} />
      </div>
    </Fragment>
  );
}

export default App;
