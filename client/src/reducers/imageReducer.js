import * as c from '../actions/ActionTypes.js';

const defaultState = {
  isLoading: false,
  mixtapeImages: [],
  error: null
}

export default (state=defaultState, action) =>{
  switch (action.type) {
    case c.REQUEST_IMAGE: 
      return Object.assign({}, state, {
        isLoading: true
      });
      case c.GET_IMAGE_SUCCESS: 
        return Object.assign({}, state, {
          isLoading: false, 
          mixtapeImages: action.images
        });
      case c.GET_IMAGE_FAILURE: 
        return Object.assign({}, state, {
          error: action.error
        })
      default: 
        return state
  }
}