import { push } from 'react-router-redux'
// ======================================================
// Action
// ======================================================
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  DUBTITLE_SET_MEDIA
} from './actionTypes'
import { clearForm } from './formAction'
import { writeUserFavoriteMedia } from './firebaseAction'
import { openModal } from '../hocs/connectModal'
import firebase from '../firebase'

export const goToPage = path => dispatch => dispatch(push(`/${path}`))

export const userLogin = ({
  email,
  displayName,
  profileImage
}) => async dispatch => {
  const userId = firebase.auth().currentUser.uid
  const snapshot = await firebase
    .database()
    .ref('/users/' + userId)
    .once('value')
  console.log('userLogin', userId, snapshot, snapshot.val())
  if (snapshot.val() && snapshot.val() !== null) {
    const { displayName, email, profileImage } = snapshot.val()
    dispatch({
      type: USER_LOGGED_IN,
      email,
      displayName,
      profileImage
    })
    dispatch(goToPage('profile'))
  } else {
    dispatch({
      type: USER_LOGGED_IN,
      email,
      displayName,
      profileImage
    })
    dispatch(goToPage('profile'))
  }
}

export const userLogout = () => ({
  type: USER_LOGGED_OUT
})

export const handleUserLogin = ({ email, displayName, profileImage }) => {
  return dispatch => {
    dispatch(userLogin({ email, displayName, profileImage }))
    dispatch(clearForm())
  }
}

export const handleUserLogout = () => {
  return dispatch => {
    dispatch(userLogout())
    dispatch(clearForm())
    dispatch(goToPage(''))
  }
}

export const handleOpenDubtitlePopup = () => {
  return dispatch => {
    openModal('dubtitle')
  }
}

export const handleSelectVideoToDub = ({ data }) => {
  return dispatch => {
    dispatch({
      type: DUBTITLE_SET_MEDIA,
      data
    })
    dispatch(handleOpenDubtitlePopup())
  }
}

export const handleUserFavoriteVideo = ({ slug }) => {
  return dispatch => {
    const userId = firebase.auth().currentUser.uid
    dispatch(writeUserFavoriteMedia({
      userId,
      mediaSlug: slug
    }))
  }
}
