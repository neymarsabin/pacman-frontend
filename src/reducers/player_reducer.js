const initialState = {
  position: [0, 0]
}

const initialScore = {
  score: 0
}

export const playerReducer = (state = initialState, action) => {
  switch(action.type) {

  case 'MOVE_PLAYER':
    return {
      ...action.payload
    }

  default:
    return state
  }
}

export const scoreReducer = (state = initialScore, action) => {
  switch(action.type) {

  case 'INCREASE_SCORE':
    return {
      score: action.payload
    }

  default:
    return state
  }
}
