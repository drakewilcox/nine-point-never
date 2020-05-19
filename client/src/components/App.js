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
      console.log(token);
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

  // getNowPlaying(){
    
  //   spotifyApi.getMyCurrentPlaybackState()
  //     .then((response) => {
  //       this.setState({
  //         nowPlaying: { 
  //             name: response.item.name, 
  //             albumArt: response.item.album.images[0].url
  //           }
  //       });
  //     })
  // }

  
  handleSetTokenToRedux(token){
    const { dispatch } = this.props;
    console.log(token);
    const action = {
      type: c.SET_TOKEN,
      token: token
    }
    dispatch(action);
  }
  
  render() {
    
    return (
    
      <div className="App">
        <a href='http://localhost:8888' > Login to Spotify </a>
        <div>
          {/* <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/> */}
        </div>
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
              {/* <iframe src="https://open.spotify.com/embed/playlist/7DpIs40KJQmdEuTdz6unYl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
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

