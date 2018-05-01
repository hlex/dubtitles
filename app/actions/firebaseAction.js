import firebase from '../firebase'

// export const subscribeUserChange = () => {
//   return (dispatch, getState) => {
//     var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
//     starCountRef.on('value', function(snapshot) {
//       updateStarCount(postElement, snapshot.val());
//     });
//   }
// }

export const writeUserData = ({ userId, displayName, email, profileImage }) => {
  console.log('writeUserData', userId, displayName, email, profileImage)
  return async (dispatch) => {
    const snapshot = await firebase
      .database()
      .ref('/users/' + userId)
      .once('value')
    const isExistingUser = snapshot.val() && snapshot.val() !== null
    console.log('isExistingUser', isExistingUser)
    if (isExistingUser) {
      const favoritesSnapShot = await firebase.database().ref(`users/${userId}/favorites`).once('value')
      console.log()
      firebase.database().ref(`users/${userId}`).update({
        displayName,
        email,
        profileImage,
        favorites: favoritesSnapShot.val() || {}
      })
    } else {
      firebase.database().ref(`users/${userId}`).set({
        displayName,
        email,
        profileImage,
        favorites: {}
      })
    }
  }
}

export const writeUserFavoriteMedia = ({ userId, mediaSlug }) => {
  console.log('writeUserFavoriteMedia', userId, mediaSlug)
  return (dispatch) => {
    firebase.database().ref(`users/${userId}/favorites/${mediaSlug}`).set(true)
  }
}

export const writeUserUnFavoriteMedia = ({ userId, mediaSlug }) => {
  console.log('writeUserUnFavoriteMedia', userId, mediaSlug)
  return (dispatch) => {
    firebase.database().ref(`users/${userId}/favorites/${mediaSlug}`).set(null)
  }
}