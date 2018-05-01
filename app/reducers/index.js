import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import domains from './domains'
import entities from './entites'
import user from './user'

export default combineReducers({
  router: routerReducer,
  domains,
  entities,
  user
})
