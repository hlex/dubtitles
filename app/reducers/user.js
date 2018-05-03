import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_UPDATE_FAVORITES,
  USER_UPDATE_DUBS
} from '../actions/actionTypes'
import _ from 'lodash/fp'

const DEFAULT_PROFILE_IMAGE = ''

const getInitialState = () => ({
  email: '',
  displayName: '',
  profileImage: DEFAULT_PROFILE_IMAGE,
  isFetched: false,
  isLoggedIn: false,
  favorites: {},
  dubs: {}
})

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case USER_UPDATE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites || state.favorites
      }
    case USER_UPDATE_DUBS:
      return {
        ...state,
        dubs: action.dubs || state.dubs
      }
    case USER_LOGGED_IN:
      return {
        ...state,
        email: action.email || state.email,
        displayName: action.displayName || state.displayName,
        profileImage: action.profileImage || state.profileImage,
        isLoggedIn: true,
        isFetched: true
      }
    case USER_LOGGED_OUT:
      return {
        ...getInitialState(),
        isFetched: true
      }
    default: {
      return state
    }
  }
}
