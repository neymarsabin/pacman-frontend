import React, { Component } from 'react'
import PlayerMovement from '../Player/playerMovement.js'
import Map from '../Map/map.js'

class PacmanWorld extends Component {
  render(){
    return(
        <div style={{
          position: 'relative',
          width: '700px',
          height: '700px',
          margin: '20px auto'
      }}>
        <Map />
        <PlayerMovement />
      </div>
    )
  }
}

export default PacmanWorld
