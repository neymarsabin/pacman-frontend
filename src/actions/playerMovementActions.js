import { store } from '../store/'
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../store/constants.js'
import { Foods } from '../Map/Food/index.js'

export default function handleMovement(player) {
  function getNewPosition(direction) {
    const oldPos = store.getState().player.position
    switch(direction) {
    case 'LEFT':
      return [ oldPos[0], oldPos[1] - SPRITE_SIZE ]

    case 'RIGHT':
      return [ oldPos[0], oldPos[1] + SPRITE_SIZE ]

    case 'UP':
      return [ oldPos[0] - SPRITE_SIZE, oldPos[1] ]

    case 'DOWN':
      return [ oldPos[0] + SPRITE_SIZE, oldPos[1] ]

    default:
      return [ oldPos[0], oldPos[1] ]
    }
  }

  function handleBoundaries(oldPos, newPos) {
    return(newPos[1] >= 0 && newPos[1] <= MAP_WIDTH - SPRITE_SIZE) &&
      (newPos[0] >= 0 && newPos[0] <= MAP_HEIGHT - SPRITE_SIZE)
      ? newPos : oldPos
  }

  function directionMove(direction) {
    const oldPos = store.getState().player.position
    let canMove = handleCollision(direction) === 1 ? false : true
    let isFood = eatFood(direction) === 2 ? true : false
    eatFood(isFood, direction)
    if (canMove) {
      store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
          position: handleBoundaries(oldPos, getNewPosition(direction))
        }
      })
    } else {
      store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
          position: handleBoundaries(oldPos, oldPos)
        }
      })
    }
  }

  function eatFood(isFood, direction) {
    let currentScore = store.getState().score.score
    let newPos = getNewPosition(direction)
    return Foods[newPos[0]/70][newPos[1]/70]
    if(isFood && (Foods[newPos[0]/70][newPos[1]/70]) == 2) {
      store.dispatch({
        type: 'INCREASE_SCORE',
        payload: currentScore + 5
      })
    }
    return Foods[newPos[0]/70][newPos[1]/70]
  }


  function handleCollision(direction) {
    let newPos = getNewPosition(direction)
    return Foods[newPos[0]/70][newPos[1]/70]
  }

  function handleKeyMovements(e) {
    switch(e.keyCode) {

    case 37:
      directionMove('LEFT')
      return console.log("left")

    case 38:
      directionMove('UP')
      return console.log("up")

    case 39:
      directionMove('RIGHT')
      return console.log("right")

    case 40:
      directionMove('DOWN')
      return console.log("down")

    default:
      console.log("not specified")
    }
  }

  window.addEventListener('keydown', (e) => {
    e.preventDefault()
    handleKeyMovements(e)
  })

  return player
}
