import { createStore } from 'redux'
import { playerReducer } from '../reducers/player_reducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  player: playerReducer
})

export const store = createStore(
  rootReducer
)
