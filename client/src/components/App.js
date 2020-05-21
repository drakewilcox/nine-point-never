import React, { Component } from 'react';
import MenuBar from './MenuBar';
import MixtapeList from './Mixtapes/MixtapeList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as c from '../actions/ActionTypes'
import Header from './Header';
import SelectedMixtape from './Mixtapes/SelectedMixtape';

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
      showSelected: false
    
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


  handleUpdateSelectedMixtape = (action) => {
    console.log(this.props)
    const { dispatch } = this.props;
    dispatch(action);
    this.setState({
      showSelected: true
    })
  }

  render() {
    const bodyStyle = {
     marginLeft: '2%',
     marginRight: '2%',
     marginTop: '2%'
     }
    const listBody = {
      backgroundColor: 'beige'
    }
    
    console.log(this.props.selectedMixtape.imageUrl)
    let currentImageUrl;
    const { error, isLoaded, currentImage } = this.state;
    if(!error && isLoaded) {
     currentImageUrl = currentImage.url; 
    }
   
    return (

      <div className="App">
          <Router>
            <div>
              <MenuBar />
            </div>
            <div>
              <Header />
            </div>
          </Router>
        { this.state.loggedIn &&
          <Router>
            <div style={bodyStyle}>
              {this.state.showSelected &&
              <div>
                <SelectedMixtape selectedMixtape/>
                <hr></hr>
              </div>
              }
              <div style={listBody}>
                <MixtapeList 
                  onMixtapeClick={this.handleUpdateSelectedMixtape}
                  />
              </div>
            </div>
          </Router>
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    token: state.token, 
    selectedMixtape: state.selectedMixtape,
    selectedUrl: state.selectedUrl,
    currentImageUrl: state.CurrentUrl
  }
}

App = connect(mapStateToProps)(App);

export default App; 

