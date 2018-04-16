import {
  USER_LOGGED_IN
} from '../actions/actionTypes'
import _ from 'lodash/fp'

const DEFAULT_PROFILE_IMAGE = 'http://via.placeholder.com/250x250'

const getInitialState = () => ({
  email: '',
  displayName: '',
  profileImage: DEFAULT_PROFILE_IMAGE
})

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        email: action.email || state.email,
        displayName: action.displayName || state.displayName,
        profileImage: action.profileImage || state.profileImage
      }
    default: {
      return state
    }
  }
}
