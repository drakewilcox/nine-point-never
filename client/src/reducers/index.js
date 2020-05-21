import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import tokenReducer from './tokenReducer';
import imageReducer from './imageReducer';
import selectedMixtapeReducer from './currentMixtapeReducer'
import currentUrlReducer from './currentUrlReducer';

const rootReducer = combineReducers({
  firestore: firestoreReducer, 
  selectedMixtape: selectedMixtapeReducer, 
  currentUrl: currentUrlReducer,
  token: tokenReducer,
  images: imageReducer
});

export default rootReducer;