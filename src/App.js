import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

function App() {

  useEffect(() => {
    console.log("he he he");
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Users />
      </div>
    </Fragment>
  );
}

export default App;
