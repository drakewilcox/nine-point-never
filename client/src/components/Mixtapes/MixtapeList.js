import React, { Component } from 'react';
import Mixtape from './Mixtape';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function MixtapeList(props) {

  useFirestoreConnect([ { collection: 'mixtapes' }]); 
  const mixtapes = useSelector((state) => state.firestore.ordered.mixtapes);

  let renderList; 

  if(isLoaded(mixtapes)) {
    renderList = mixtapes.map((a) => <Mixtape mixtapeObj={a} key={a.id} /> );
  } else {
    renderList = 'loading...';
  }

  return ( 
    <React.Fragment>
      <h1>Playlists:</h1>
      <div>{renderList}</div>
    </React.Fragment>
  )
}

export default MixtapeList 