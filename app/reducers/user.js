import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT
} from '../actions/actionTypes'
import _ from 'lodash/fp'

const DEFAULT_PROFILE_IMAGE = 'http://via.placeholder.com/250x250'

const getInitialState = () => ({
  email: '',
  displayName: '',
  profileImage: DEFAULT_PROFILE_IMAGE,
  isLoggedIn: false
})

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        email: action.email || state.email,
        displayName: action.displayName || state.displayName,
        profileImage: action.profileImage || state.profileImage,
        isLoggedIn: true
      }
    case USER_LOGGED_OUT:
      return getInitialState()
    default: {
      return state
    }
  }
}
