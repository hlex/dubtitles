import firebase from '../firebase'

export const writeUserData = ({ userId, displayName, email, profileImage }) => {
  console.log('writeUserData', userId, displayName, email, profileImage)
  return (dispatch) => {
    firebase.database().ref(`users/${userId}`).set({
      displayName,
      email,
      profileImage
    })
  }
}

export const writeUserFavoriteMedia = ({ userId, mediaSlug }) => {
  console.log('writeUserFavoriteMedia', userId, mediaSlug)
  return (dispatch) => {
    firebase.database().ref(`users/${userId}/favorites/${mediaSlug}`).set({
      slug: mediaSlug
    })
  }
}