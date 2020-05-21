import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
  padding: '30px',
  position: 'relative', 
  color: 'white'
}

function Header() {
  return( 
    <div style={heroImage}>
      <div style={heroText}>
        <h1>90 Point Never</h1>
        <p>Curated Playlists For Music Discovery</p>
        <Button variant='dark'href='http://localhost:8888'> Sign In With Spotify </Button>
      </div>
    </div>
  )
}

export default Header; 