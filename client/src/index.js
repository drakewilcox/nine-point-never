import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <React.Fragment>
    <iframe src="https://open.spotify.com/embed/playlist/7DpIs40KJQmdEuTdz6unYl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
