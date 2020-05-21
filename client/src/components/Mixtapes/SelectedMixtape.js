import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class SelectedMixtape extends Component {

  render(){
    const initialCardStyles = {
      backgroundImage: `url(${this.props.selectedMixtape.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '400px',
      height: '400px',
      margin: '10px',
      boxShadow: '0 10px 10px 0 rgba(0,0,0,0.10)',
      opacity: '0.8'

    }
    const topView = {
      backgroundColor: 'beige',
      textAlign: 'center',
      width: 'auto',
    }
    const player = {
      margin: '10px'
    }

    const content = {
      display: 'flex',
      justifyContent: 'center'
    }
    return(
      <React.Fragment>
        <div style={topView}>
          <h1>{this.props.selectedMixtape.title}</h1>
          <p><em>{this.props.selectedMixtape.description}</em></p>
          <hr></hr>
        <div style={content}>

          <Card style={initialCardStyles}>
          </Card>
        <div style={player}>
          <iframe src= { `https://open.spotify.com/embed/playlist/${this.props.selectedMixtape.playlistId}` }  width="300" height="400" frameBorder="0" allowtransparency="true" allow="encrypted-media" />
          </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedMixtape: state.selectedMixtape
  }
}
SelectedMixtape = connect(mapStateToProps)(SelectedMixtape);
export default SelectedMixtape;