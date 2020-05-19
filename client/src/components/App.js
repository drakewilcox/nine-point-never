import React, { Component } from 'react';
import MenuBar from './MenuBar';
import MixtapeList from './Mixtapes/MixtapeList'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as c from '../actions/ActionTypes'

import Header from './Header';


import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(props){
    super(props);
    const params = this.getHashParams();
    const token = params.access_token;
  
    if (token) {
      spotifyApi.setAccessToken(token);
      this.handleSetTokenToRedux(token);
    }
    this.state = {
      token: token,
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

 

  handleSetTokenToRedux(token){
    const { dispatch } = this.props;
  
    const action = {
      type: c.SET_TOKEN,
      token: token
    }
    dispatch(action);
  }

  handleSettingCoverImage = async (id) => {
    await fetch(`https://api.spotify.com/v1/playlists/${id}/images`,{
      headers: {
        'Authorization': 'Bearer ' + this.state.token
      }
    });
    const { dispatch } = this.props; 
    dispatch(makeApiCall());
  }
  
  render() {
    console.log(this.props.token.accessToken);
    
    return (
    
      <div className="App">
        <a href='http://localhost:8888' >Login to Spotify</a>
       
        { this.state.loggedIn &&
          <Router>
            <div>
              <MenuBar />
            </div>
            <div>
              <Header />
            </div>
            <div>
              <MixtapeList />
            </div>
          </Router>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    token: state.token 
  }
}

App = connect(mapStateToProps)(App);

export default App; 

