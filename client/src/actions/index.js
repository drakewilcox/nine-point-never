import * as c from '.ActionTypes';

export const setToken = (token) => ({
    type: c.SET_TOKEN,
    token
});

export const setUsername = (username) => ({
  type: c.SET_USERNAME, 
  username
});

