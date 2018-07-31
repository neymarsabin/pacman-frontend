import React, { Component } from 'react'
import { connect } from 'react-redux'
import pacmanSprite from '../pacman.png'
import handleMovement from '../actions/playerMovementActions.js'

class playerMovement extends Component {
  render() {
    return(
        <div style={{
          position: 'absolute',
          top: this.props.position[0],
          left: this.props.position[1],
          backgroundImage: `url('${pacmanSprite}')`,
          backgroundPosition: '0 0',
          backgroundSize: '70px 70px',
          width: '70px',
          height: '70px',
        }}>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ...state.player
  }
}

export default connect(mapStateToProps)(handleMovement(playerMovement))
