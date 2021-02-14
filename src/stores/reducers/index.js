import { combineReducers } from 'redux'
import topSongsReducer from './topSongsReducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  topSongsReducer
})

export default reducers
