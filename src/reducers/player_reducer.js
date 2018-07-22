const initialState = {
  position: [0, 0]
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
