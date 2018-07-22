import React, { Component } from 'react'
import PlayerName from './Player/playerName.js'
import PacmanWorld from './World/PacmanWorld.js'
/* import { Loop, Stage, World, Body, Sprite } from 'react-game-kit' */

class App extends Component {
  render() {
    return (
      <div>
        <PlayerName />
        <PacmanWorld />
      </div>
    );
  }
}

export default App;
