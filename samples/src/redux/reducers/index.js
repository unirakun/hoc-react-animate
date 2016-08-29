import { combineReducers } from 'redux'

import filter from './filter'
import list from './list'

export default combineReducers({
  filter,
  list,
})

export * from './list'
export * from './filter'
