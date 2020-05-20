import React, { Component } from 'react';
import MenuBar from './MenuBar';
import MixtapeList from './Mixtapes/MixtapeList';
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
      error: null,
      isLoaded: false,
      currentImage: [],
      token: token,
      loggedIn: token ? true : false,
    
    };
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
    const apiToken = this.props.token.accessToken
    await fetch(`https://api.spotify.com/v1/playlists/${id}/images`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + apiToken
      }
    })
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        this.setState({
          isLoaded: true,
          currentImage: jsonifiedResponse[0],
        });
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error
        })
      })

  }
  
  render() {
    let currentImageUrl;
    const { error, isLoaded, currentImage } = this.state;
    if(!error && isLoaded) {
     currentImageUrl = currentImage.url; 
    }
   
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
              <MixtapeList 
                handleSettingCoverImage={this.handleSettingCoverImage}
               />
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

