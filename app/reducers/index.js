import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import domains from './domains'
import user from './user'

export default combineReducers({
  router: routerReducer,
  domains,
  user
})
