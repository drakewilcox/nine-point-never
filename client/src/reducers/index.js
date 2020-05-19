import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import tokenReducer from './tokenReducer';
import imageReducer from './imageReducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer, 
  token: tokenReducer,
  images: imageReducer
});

export default rootReducer;