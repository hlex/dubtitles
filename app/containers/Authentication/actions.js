import {
  goToPage,
  setUser
} from '../../actions'
import {
  closeModal
} from '../../hocs/connectModal'

export const handleUserSignUpWithEmail = (user) => {
  return (dispatch) => {
    closeModal('authentication')
    dispatch(setUser(user))
    dispatch(goToPage('profile'))
  }
}