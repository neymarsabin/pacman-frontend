import { createStore } from 'redux'
import { playerReducer, scoreReducer } from '../reducers/player_reducer.js'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  player: playerReducer,
  score: scoreReducer
})

export const store = createStore(
  rootReducer
)
