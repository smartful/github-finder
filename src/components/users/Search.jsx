import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const Search = () => {
  const [text, setText] = useState('');
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleText = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      setText('');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users ..."
          value={text}
          onChange={handleText}
        />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {users.length > 0 &&
        <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
      }
    </div>
  );
}

export default Search;
