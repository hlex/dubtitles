import {
  goToPage,
  userLogin
} from '../../actions'
import {
  writeUserData
} from '../../actions/firebaseAction'
import {
  closeModal
} from '../../hocs/connectModal'

const userSignUpThenLogin = (user) => {
  return (dispatch) => {
    user.profileImage = 'https://res.cloudinary.com/www-appmondit-com/image/upload/v1524952488/80e3a04748883424f92259f1c81dda86-bpthumb_o3ivta.jpg'
    closeModal('authentication')
    dispatch(userLogin(user))
    dispatch(writeUserData({
      userId: user.uid,
      displayName: user.displayName || 'No name',
      email: user.email,
      profileImage: user.profileImage
    }))
    dispatch(goToPage('profile'))
  }
}

export const handleUserSignUpWithEmail = (user) => {
  return (dispatch) => {
    dispatch(userSignUpThenLogin(user))
  }
}

export const handleUserSignUpWithFacebook = (user) => {
  return (dispatch) => {
    dispatch(userSignUpThenLogin(user))
  }
}