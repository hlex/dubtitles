import { push } from 'react-router-redux'
import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionTypes'
import { openModal } from '../hocs/connectModal'
import firebase from '../firebase'

export const goToPage = path => dispatch => dispatch(push(`/${path}`))

export const userLogin = ({ email, displayName, profileImage }) => async (dispatch) => {
  var userId = firebase.auth().currentUser.uid
  const snapshot = await firebase.database().ref('/users/' + userId).once('value')
  const { displayName, email, profileImage } = snapshot.val()
  dispatch({
    type: USER_LOGGED_IN,
    email,
    displayName,
    profileImage
  })
}

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
    dispatch(goToPage(''))
  }
}

export const handleOpenDubtitlePopup = () => {
  return (dispatch) => {
    openModal('dubtitle')
  }
}
