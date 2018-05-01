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
    firebase.database().ref(`users/${userId}/favorites/${mediaSlug}`).set(true)
  }
}

export const writeUserUnFavoriteMedia = ({ userId, mediaSlug }) => {
  console.log('writeUserUnFavoriteMedia', userId, mediaSlug)
  return (dispatch) => {
    firebase.database().ref(`users/${userId}/favorites/${mediaSlug}`).set(null)
  }
}