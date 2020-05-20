import React, { Component } from 'react';
import Mixtape from './Mixtape';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function MixtapeList(props) {

  useFirestoreConnect([ { collection: 'mixtapes' }]); 
  const mixtapes = useSelector((state) => state.firestore.ordered.mixtapes);

  let renderList; 

  const mixtapeListGrid = {
    position: 'relative',
    top: '5vh', 
    display: 'flex',
    justifyContent: 'space-around',
    alignContent: 'space-between',
    flexWrap: 'wrap'
  }

  if(isLoaded(mixtapes)) {
    renderList = mixtapes.map((a) => <Mixtape 
    handleSettingCoverImage={props.handleSettingCoverImage} 
    mixtapeObj={a} 
    key={a.id} /> );
  } else {
    renderList = 'loading...';
  }

  return ( 
    <React.Fragment>
      <h1>Playlists:</h1>
      <div style={mixtapeListGrid}>{renderList}</div>
    </React.Fragment>
  )
}

export default MixtapeList 