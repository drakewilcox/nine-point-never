import * as c from '../actions/ActionTypes.js';

const initialState = {
  username: null, 
  accessToken: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case c.SET_TOKEN: 
      return Object.assign({}, state, {
        accessToken: action.token
      })
  }


  return state
}