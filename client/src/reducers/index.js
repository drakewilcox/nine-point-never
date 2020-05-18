import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer, 
  token: tokenReducer
});

export default rootReducer;