import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Mixtape(props) {
  const history = useHistory();
  const { mixtapeObj } = props

  return(
    <React.Fragment>
      <h1>{mixtapeObj.title}</h1>
      <div>
        <iframe src= { `https://open.spotify.com/embed/playlist/${mixtapeObj.playlistId}` }  width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media" />
      </div>
      <p>{mixtapeObj.user}</p>
    </React.Fragment>
  );
}

export default Mixtape 