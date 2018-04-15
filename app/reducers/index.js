import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import domains from './domains'

export default combineReducers({
  router: routerReducer,
  domains
})
