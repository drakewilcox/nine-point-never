import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';

class Mixtape extends Component {
 constructor(props) {
   super(props);
   this.state = {
    error: null,
    isLoaded: false,
    currentImageUrl: []
   }
 }
 componentDidMount() {
   this.makeApiCall()
 }



makeApiCall = () => {
  const { mixtapeObj } = this.props
  const apiToken = this.props.token
  const id = mixtapeObj.playlistId
  console.log(id);
  fetch(`https://api.spotify.com/v1/playlists/${id}/images`, {
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
        currentImageUrl: jsonifiedResponse[0]
      });
    })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        error
      });
    });
  }

  render(){
    const initialCardStyles = {
      backgroundImage: `url(${this.state.currentImageUrl.url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '250px',
      height: '250px',
      margin: '10px',
      boxShadow: '0 10px 10px 0 rgba(0,0,0,0.10)'
    }
  
    const { mixtapeObj } = this.props
    const { error, isLoaded, currentImageUrl } = this.state;
    if(error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>
    }
    else if (!isLoaded) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return(
        <React.Fragment>
          {/* <h1>{mixtapeObj.title}</h1>
          <p>{currentImageUrl.url}</p> */}
          <div>
            <Card className='container' style={initialCardStyles}>
                
                <div className='middle'>
                  <h1 className='text'>{mixtapeObj.title}</h1>
                
              </div>
            </Card>
          </div>

          {/* <div>
            <iframe src= { `https://open.spotify.com/embed/playlist/${mixtapeObj.playlistId}` }  width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" />
          </div> */}
          {/* <p>{mixtapeObj.user}</p> */}
        </React.Fragment>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    token: state.token.accessToken,
    imageUrl: state.images.mixtapeImages
  }
}

Mixtape = connect(mapStateToProps)(Mixtape);

export default Mixtape; 