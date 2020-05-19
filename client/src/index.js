import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from './firebase';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/auth'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunkMiddleware, middlewareLogger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const rrfProps = {
  firebase, 
  config: {
    userProfile: 'users', 
    useFirestoreForProfile: true
  }, 
  dispatch: store.dispatch, 
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

