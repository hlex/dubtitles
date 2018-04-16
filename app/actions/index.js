import { push } from 'react-router-redux'
import {
  USER_LOGGED_IN
} from './actionTypes'

export const goToPage = path => dispatch => dispatch(push(`/${path}`))

export const setUser = ({ email, displayName, profileImage }) => ({
  type: USER_LOGGED_IN,
  email,
  displayName: displayName || email,
  profileImage
})

export const handleUserLogin = ({ email, displayName, profileImage }) => {
  return (dispatch) => {
    dispatch(setUser({ email, displayName, profileImage }))
  }
}