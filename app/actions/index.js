import { push } from 'react-router-redux'
import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'

export const goToPage = path => dispatch => dispatch(push(`/${path}`))

export const userLogin = ({ email, displayName, profileImage }) => ({
  type: USER_LOGGED_IN,
  email,
  displayName: displayName || email,
  profileImage
})

export const userLogout = () => ({
  type: USER_LOGGED_OUT
})

export const handleUserLogin = ({ email, displayName, profileImage }) => {
  return dispatch => {
    dispatch(userLogin({ email, displayName, profileImage }))
  }
}

export const handleUserLogout = () => {
  return dispatch => {
    dispatch(userLogout())
  }
}
