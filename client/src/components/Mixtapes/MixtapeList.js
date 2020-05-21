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
    backgroundColor: 'beige',
    position: 'relative',
    top: '1vh', 
    marginBottom: '4vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'space-between',
    flexWrap: 'wrap'
  }

  if(isLoaded(mixtapes)) {
    renderList = mixtapes.map((a) => <Mixtape 
    whereMixtapeClicked={props.onMixtapeClick}
    mixtapeObj={a} 
    key={a.id} /> );
  } else {
    renderList = 'loading...';
  }

  return ( 
    <React.Fragment>
      <div style={mixtapeListGrid}>{renderList}</div>
    </React.Fragment>
  )
}

export default MixtapeList 