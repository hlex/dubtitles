import React from 'react'
import { Player, ControlBar } from 'video-react'

// import { bindFormValidation } from 'redux-form-manager'

// import { InputField, Button } from '../../components'
import { withRedux } from '../../hocs'
// import createForm from './createForm'
// import firebase from '../../firebase'
// import { closeModal } from '../../hocs/connectModal'

// ======================================================
// Action
// ======================================================
// import { FORM_CHANGE } from '../../actions/actionTypes'
// import { handleUserSignUpWithEmail } from './actions'

const mapStateToProps = state => {
  const { src } = this.state.domains.dubtitle
  return {
    src
  }
}

const actionToProps = {
}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  state = {

  }
  render() {
    const { src } = this.props
    return (
      <div className='dubtitle'>
        <div className='container'>
          <Player poster={src} preload='metadata'>
            <source src={src} />
            <ControlBar autoHide disableDefaultControls />
          </Player>
        </div>
      </div>
    )
  }
}
