import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING,
  GET_REPOS
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    const urlHost = `https://api.github.com/search/users`;
    const url = `${urlHost}?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    setLoading();
    const res = await axios.get(url);
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const getUser = async (username) => {
    const urlHost = `https://api.github.com/users/`;
    const url = `${urlHost}${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    setLoading();
    const res = await axios.get(url);
    dispatch({ type: GET_USER, payload: res.data });
  };

  const getUserRepos = async (username) => {
    const urlHost = `https://api.github.com/users/`;
    const url = `${urlHost}${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    setLoading();
    const res = await axios.get(url);
    dispatch({ type: GET_REPOS, payload: res.data });
  }

  return <GithubContext.Provider value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos,
    }}
  >
    {props.children}
  </GithubContext.Provider>
};

export default GithubState;