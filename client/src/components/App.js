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
      currentImage: {},
      token: token,
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
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
    // const apiToken = this.props.token.accessToken
    await fetch(`https://api.spotify.com/v1/playlists/${id}/images`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + 'BQBcH3ZWx863w9v-Fv5P32d7jyo3JFcO8IDgUT3Bl75lDlU0PZkyDCxkzwQwPB1UHM6bimDBTVQ8rfvZth-4m0k-zSF6Doa-W9oBTV9rWjDQsyvC6ZJk_-DWt7e5ZDNrAoq_CesECpwcDMiAtu-TOSqGfqwKUlllZbmySBLZDUqQcGdTAWw2o5P4bEHPgtBeqZ1zJikC42ixdwzTQKBIRRxwq96hLy_wQNW241x-_4KcUG7qZTWefxyTp5g0DJFscd4ntbgPxAEWJ7Ul'
      }
    })
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        this.setState({
          currentImage: jsonifiedResponse[0],
        });
      }
      
    )

  }

  

  // handleSettingCoverImage = async (id) => {
  //   await fetch(`https://api.spotify.com/v1/playlists/${id}/images`,{
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + this.state.token
  //     }
  //   });
  //   const { dispatch } = this.props; 
  //   dispatch(makeApiCall());
  // }
  
  render() {
  //  console.log(this.state.currentImage);
  // console.log(this.props.token.accessToken)
  const { currentImage } = this.state
 console.log(this.state.currentImage.url)
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
                handleSettingCoverImage={this.handleSettingCoverImage}/>
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

