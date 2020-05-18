import React from 'react';
import { withRouter } from 'react-router-dom';

const heroImage = {
  backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80)', 
  height: '100%',
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat', 
  backgroundSize: 'cover',
  position: 'relative'
}

const heroText = {
  textAlign: 'center', 
  padding: '100px',
  position: 'relative', 
  // top: '50%', 
  // left: '50%', 
  // transform: 'translate(-50%, -50%)', 
  color: 'white'
}

function Header() {
  return( 
    <div style={heroImage}>
      <div style={heroText}>
        <h1>90 Point Never</h1>
        <p>Curated Playlists For Music Discovery</p>
        {/* <button> Sign In With Spotify </button> */}
      </div>
    </div>
  )
}

export default Header; 