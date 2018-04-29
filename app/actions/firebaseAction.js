import firebase from '../firebase'

export const writeUserData = ({ userId, displayName, email, profileImage }) => {
  console.log('writeUserData', userId, displayName, email, profileImage)
  return (dispatch) => {
    firebase.database().ref('users/' + userId).set({
      displayName,
      email,
      profileImage
    })
  }
}
