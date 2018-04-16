import {
  goToPage,
  userLogin
} from '../../actions'
import {
  closeModal
} from '../../hocs/connectModal'

export const handleUserSignUpWithEmail = (user) => {
  return (dispatch) => {
    closeModal('authentication')
    dispatch(userLogin(user))
    dispatch(goToPage('profile'))
  }
}