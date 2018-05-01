
import { push } from 'react-router-redux'
import _ from 'lodash'
import uuid from 'uuid'
// ======================================================
// Action
// ======================================================
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_UPDATE_FAVORITES,
  DUBTITLE_SET_MEDIA,
  ENTITIES_DISCOVER_RECEIVED
} from './actionTypes'
import { clearForm } from './formAction'
import { writeUserFavoriteMedia, writeUserUnFavoriteMedia } from './firebaseAction'
import { openModal } from '../hocs/connectModal'
import firebase from '../firebase'
// ======================================================
// Content
// ======================================================
import ContentDiscovers from '../../content/discovers'

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
  const isExistingUser = snapshot.val() && snapshot.val() !== null
  console.log('userLogin: isExistingUser', isExistingUser, userId, snapshot, snapshot.val())
  if (isExistingUser) {
    const { displayName, email, profileImage, favorites = [] } = snapshot.val()
    console.log('userLogin', displayName, email, profileImage, favorites)
    dispatch({
      type: USER_LOGGED_IN,
      email,
      displayName,
      profileImage
    })
    dispatch({
      type: USER_UPDATE_FAVORITES,
      favorites
    })
    var favoriteRef = firebase.database().ref(`users/${userId}/favorites`)
    favoriteRef.on('value', function(snapshot) {
      // update favoriteList
      dispatch({
        type: USER_UPDATE_FAVORITES,
        favorites: snapshot.val()
      })
    })
    // dispatch(goToPage('profile'))
  } else {
    dispatch({
      type: USER_LOGGED_IN,
      email,
      displayName,
      profileImage
    })
    // dispatch(goToPage('profile'))
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
  return (dispatch, getState) => {
    dispatch({
      type: DUBTITLE_SET_MEDIA,
      data
    })
    const isUserLoggedIn = getState().user.isLoggedIn
    if (isUserLoggedIn) {
      dispatch(handleOpenDubtitlePopup())
    } else {
      openModal('authentication')
    }
  }
}

export const handleUserFavoriteVideo = ({ slug, isFav }) => {
  return dispatch => {
    const userId = firebase.auth().currentUser.uid
    if (isFav) {
      dispatch(writeUserFavoriteMedia({
        userId,
        mediaSlug: slug
      }))
    } else {
      dispatch(writeUserUnFavoriteMedia({
        userId,
        mediaSlug: slug
      }))
    }
  }
}

export const getDiscoverData = () => {
  return (dispatch) => {
    const entities = _.reduce(ContentDiscovers, (result, discoverCategory) => {
      const discoverItems = _.reduce(discoverCategory.medias || [], (acc, media) => {
        return {
          ...acc,
          [media.slug || uuid()]: media
        }
      }, {})
      return {
        ...result,
        ...discoverItems
      }
    }, {})
    dispatch({
      type: ENTITIES_DISCOVER_RECEIVED,
      data: entities,
      rawData: ContentDiscovers
    })
  }
}
