import React, { Component } from 'react';
import MenuBar from './MenuBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    console.log(token);
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
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

  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: { 
              name: response.item.name, 
              albumArt: response.item.album.images[0].url
            }
        });
      })
  }
  
  render() {
    console.log(this.getPlaylist())
    return (
    
      <div className="App">
        <a href='http://localhost:8888' > Login to Spotify </a>
        {/* <div>
          Now Playing: { this.state.nowPlaying.name }
        </div> */}
        <div>
          {/* <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/> */}
        </div>
        { this.state.loggedIn &&
          <Router>
            <MenuBar />
              {/* <iframe src="https://open.spotify.com/embed/playlist/7DpIs40KJQmdEuTdz6unYl" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
          </Router>
        }
      </div>
    );
  }
}

export default App;
