import React, { Component, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeApiCall } from '../../actions'

function Mixtape(props) {
  const history = useHistory();
  const { mixtapeObj, handleSettingCoverImage } = props
  

// useEffect(() => {
//     const id = mixtapeObj.playlistId
//     const token = props.token
//     const { dispatch } = props;
  
//     dispatch(makeApiCall(id, token));
//   })

// const getImageFromApi = () => {

// }


  // console.log('image Url: ', props.imageUrl[0]);
  // handleSettingCoverImage(mixtapeObj.id)
  return(
    handleSettingCoverImage(mixtapeObj.playlistId),
    <React.Fragment>
      <h1>{mixtapeObj.title}</h1>
      <div>
        <iframe src= { `https://open.spotify.com/embed/playlist/${mixtapeObj.playlistId}` }  width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" />
      </div>
      <p>{mixtapeObj.user}</p>
    </React.Fragment>
  );
}
const mapStateToProps = state => {
  return {
    token: state.token.accessToken,
    imageUrl: state.images.mixtapeImages
  }
}

Mixtape = connect(mapStateToProps)(Mixtape);

export default Mixtape; 