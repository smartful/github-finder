import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Search = ({ searchUsers, clearUsers, showClear, setAlert }) => {
  const [text, setText] = useState('');

  const handleText = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      setAlert("Please enter something", "light")
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
      {showClear &&
        <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
      }
    </div>
  );
}

Search.propTypes = {
  searchUsers: PropTypes.func,
  clearUsers: PropTypes.func,
  showClear: PropTypes.bool,
  setAlert: PropTypes.func,
}

export default Search;
